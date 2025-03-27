import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAPI,
  registerAPI,
  logoutAPI,
  changePasswordAPI,
  forgotPasswordAPI,
  verifyChangePasswordAPI,
  getProfileAPI,
  updateProfileAPI,
} from "../services/authAPI";
import { AuthState, LoginCredentials, RegisterData } from "../types";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await loginAPI(credentials);
      return response.resources;
    } catch (error: any) {
      return rejectWithValue(error.message || "Login failed");
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData: RegisterData, { rejectWithValue }) => {
    try {
      const response = await registerAPI(userData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Registration failed");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logoutAPI();
      return null;
    } catch (error: any) {
      return rejectWithValue(error.message || "Logout failed");
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (
    passwordData: { oldPassword: string; newPassword: string },
    { getState, rejectWithValue }
  ) => {
    const state = getState() as { auth: AuthState };
    const token = state.auth.accessToken;
    if (!token) {
      return rejectWithValue("No token found");
    }
    try {
      const response = await changePasswordAPI(passwordData, token);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Change password failed");
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await forgotPasswordAPI(email);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || "Forgot password failed");
    }
  }
);

export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as any;
    const token = state.auth.accessToken || localStorage.getItem("accessToken"); // Lấy token từ Redux hoặc localStorage

    if (!token) {
      return rejectWithValue("Token không tồn tại");
    }

    try {
      const response = await getProfileAPI(token); // Gọi API với token
      return response.data[0]; // Trả về dữ liệu người dùng (phần tử đầu tiên trong mảng `data`)
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch profile");
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (
    profileData: {
      fullName: string;
      email: string;
      phone?: string;
      address?: string;
    },
    { getState, rejectWithValue }
  ) => {
    const state = getState() as { auth: AuthState };
    const token = state.auth.accessToken;

    if (!token) {
      return rejectWithValue("Token không tồn tại");
    }

    try {
      const response = await updateProfileAPI(profileData, token);
      return response; // Trả về dữ liệu từ API
    } catch (error: any) {
      return rejectWithValue(error.message || "Cập nhật thông tin thất bại");
    }
  }
);

export const verifyChangePassword = createAsyncThunk(
  "auth/verifyChangePassword",
  async (
    passwordData: { code: string; password: string; confirmPassword: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await verifyChangePasswordAPI(passwordData);
      return response; // Trả về dữ liệu từ API
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Đổi mật khẩu thất bại"
      );
    }
  }
);

const storedProfile = localStorage.getItem("profile");
const storedToken = localStorage.getItem("accessToken");

const initialState: AuthState = {
  user: storedProfile ? JSON.parse(storedProfile) : null,
  accessToken: storedToken || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.profile;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        localStorage.removeItem("profile");
        localStorage.removeItem("accessToken");
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        console.error("Logout failed:", action.payload);
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload };
        toast.success("Cập nhật thông tin thành công!");
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(
          (action.payload as string) || "Cập nhật thông tin thất bại"
        );
      })
      .addCase(verifyChangePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyChangePassword.fulfilled, (state, action) => {
        state.loading = false;
        const successMessage =
          action.payload?.message || "Đổi mật khẩu thành công!";
        toast(successMessage); // Hiển thị thông báo từ API
      })
      .addCase(verifyChangePassword.rejected, (state, action) => {
        state.loading = false;
        const errorMessage =
          (action.payload as string) || "Đổi mật khẩu thất bại";
        state.error = errorMessage;
        toast.error(errorMessage); // Hiển thị thông báo lỗi từ API
      });
  },
});

export default authSlice.reducer;
