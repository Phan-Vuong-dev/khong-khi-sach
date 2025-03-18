import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../services/api";
import { storageService } from "../../services/storage.service";
import {
  AuthState,
  LoginRequest,
  RegisterRequest,
  UserProfile,
} from "../../types";

const initialState: AuthState = {
  user: storageService.getUserProfile(),
  token: storageService.getToken(),
  isAuthenticated: !!storageService.getToken(),
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  { user: UserProfile; token: string },
  LoginRequest,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await authApi.login(credentials);

    if (response.status === "200" && response.message === "SUCCESS") {
      const { accessToken, profile } = response.resources;

      // Store in localStorage using storage service
      storageService.setToken(accessToken);
      storageService.setUserProfile(profile);

      return { user: profile, token: accessToken };
    } else {
      return rejectWithValue(response.message || "Login failed");
    }
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

export const registerUser = createAsyncThunk<
  UserProfile,
  RegisterRequest,
  { rejectValue: string }
>("auth/registerUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      return rejectWithValue(error.message);
    }

    const data = await response.json();
    const userProfile: UserProfile = {
      id: data.id,
      username: data.username,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      photo: data.photo,
      doB: data.doB,
      addressDetail: data.addressDetail,
      active: data.active,
      roleId: data.roleId,
      createdTime: data.createdTime,
      roleName: data.roleName, // Ensure these properties are included
      roleColor: data.roleColor,
      warehouseId: data.warehouseId,
      displayName: data.displayName,
    };

    return userProfile;
  } catch (error) {
    return rejectWithValue("Failed to register user");
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  storageService.clearAuthData();
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
