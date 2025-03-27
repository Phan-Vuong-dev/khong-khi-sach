import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostDetailAPI, fetchPostsAPI } from "../services/postAPI";

interface PostState {
  posts: any[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  hasMore: true,
};

// Async thunk để gọi API lấy danh sách bài viết
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (
    { pageIndex, pageSize }: { pageIndex: number; pageSize: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetchPostsAPI(pageIndex, pageSize);
      return response.data; // Trả về danh sách bài viết
    } catch (error: any) {
      return rejectWithValue(error.message || "Lỗi khi tải bài viết");
    }
  }
);

export const fetchPostDetail = createAsyncThunk(
  "posts/fetchPostDetail",
  async (id: string | number, { rejectWithValue }) => {
    try {
      const response = await fetchPostDetailAPI(id);
      return response.data; // Trả về dữ liệu chi tiết bài viết
    } catch (error: any) {
      return rejectWithValue(error.message || "Lỗi khi tải chi tiết bài viết");
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...state.posts, ...action.payload];
        state.hasMore = action.payload.length > 0; // Nếu không còn bài viết, đặt hasMore = false
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //Post Detail
      .addCase(fetchPostDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [action.payload]; // Lưu chi tiết bài viết (hoặc xử lý khác nếu cần)
      })
      .addCase(fetchPostDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default postSlice.reducer;
