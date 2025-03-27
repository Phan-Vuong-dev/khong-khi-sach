import axios from "axios";
import { configURL } from "./configAPI";

// Hàm gọi API để lấy danh sách bài viết với phân trang
export const fetchPostsAPI = async (pageIndex: number, pageSize: number) => {
  const response = await axios.get(
    `${configURL}post/api/listpaging?pageIndex=${pageIndex}&pagesize=${pageSize}`
  );
  return response.data;
};

export const fetchPostDetailAPI = async (id: string | number) => {
  const response = await axios.get(`${configURL}post/api/detail/${id}`);
  return response.data;
};
