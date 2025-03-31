import axios from "axios";
import { configURL } from "./configAPI";

export const fetchNotificationsAPI = async (
  token: string,
  pageIndex: number,
  pageSize: number
) => {
  const response = await axios.get(
    `${configURL}notification/api/list-notification-by-account-id?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
