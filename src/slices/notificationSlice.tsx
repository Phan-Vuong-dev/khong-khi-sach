import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNotificationsAPI } from "../services/notificationAPI";

interface NotificationState {
  notifications: any[];
  loading: boolean;
  error: string | null;
}

const initialState: NotificationState = {
  notifications: [],
  loading: false,
  error: null,
};

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (
    {
      token,
      pageIndex,
      pageSize,
    }: { token: string; pageIndex: number; pageSize: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetchNotificationsAPI(token, pageIndex, pageSize);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.message || "Lỗi khi tải danh sách thông báo"
      );
    }
  }
);

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default notificationSlice.reducer;
