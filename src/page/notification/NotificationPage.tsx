import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import HeaderDetailPage from "../../components/HeaderDetailPage";
import { fetchNotifications } from "../../slices/notificationSlice";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const { notifications, loading, error } = useSelector(
    (state: RootState) => state.notifications
  );

  const token = localStorage.getItem("accessToken");

  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    if (token) {
      dispatch(fetchNotifications({ token, pageIndex, pageSize }));
    }
  }, [dispatch, token, pageIndex, pageSize]);

  console.log("notifications", notifications);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white">
      <HeaderDetailPage titlePage="Danh sách thông báo" />
      <div className="min-h-screen pt-[128px] pb-[70px]">
        <div className="flex flex-row justify-end gap-[10px] p-[20px] bg-white">
          <h2>Đánh dấu là đã đọc</h2>{" "}
          <div className="flex items-center justify-center p-[4.8px] bg-gradient-tick">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.0876 2.38088C11.5718 3.20667 8.36468 5.41517 5.40721 9.19844L3.65961 7.25879C3.39074 6.95152 2.89143 6.95152 2.62257 7.25879L1.33587 8.69912C1.08622 8.98719 1.10542 9.40969 1.37428 9.65934L5.33039 13.4618C5.65686 13.7691 6.19459 13.6923 6.42504 13.289C8.53752 9.4673 10.8036 6.62505 14.6445 3.3603C15.1054 2.95701 14.6829 2.18883 14.0876 2.38088Z"
                fill="#2494F8"
              />
            </svg>
          </div>
        </div>
        <Link to="/notification/1">
          <div className="flex flex-col gap-[10px] p-[20px] bg-notification bg-notification-active">
            <div className="flex flex-row items-center justify-between gap-[20px]">
              <div className="flex items-center justify-center p-[6px] bg-notification-tick">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M13.6274 12.1875H4.37259V13.3125H13.6274V12.1875ZM13.1813 6.65885L13.44 8.94218L14.5579 8.81558L14.2992 6.53221L13.1813 6.65885ZM4.55998 8.94218L4.81864 6.65885L3.70079 6.53221L3.44214 8.81558L4.55998 8.94218ZM3.77028 10.7743C4.20878 10.2581 4.4833 9.61913 4.55998 8.94218L3.44214 8.81558C3.39027 9.27338 3.20489 9.70223 2.91294 10.0458L3.77028 10.7743ZM13.44 8.94218C13.5167 9.61913 13.7912 10.2581 14.2297 10.7743L15.0871 10.0458C14.7951 9.70223 14.6097 9.27338 14.5579 8.81558L13.44 8.94218ZM4.37259 12.1875C3.70749 12.1875 3.28443 11.3461 3.77028 10.7743L2.91294 10.0458C1.84867 11.2985 2.6837 13.3125 4.37259 13.3125V12.1875ZM13.6274 13.3125C15.3163 13.3125 16.1513 11.2985 15.0871 10.0458L14.2297 10.7743C14.7155 11.3461 14.2925 12.1875 13.6274 12.1875V13.3125ZM14.2992 6.53221C13.9878 3.78355 11.7209 1.6875 8.99999 1.6875V2.8125C11.1226 2.8125 12.9314 4.45274 13.1813 6.65885L14.2992 6.53221ZM4.81864 6.65885C5.06855 4.45274 6.87732 2.8125 8.99999 2.8125V1.6875C6.27908 1.6875 4.01216 3.78355 3.70079 6.53221L4.81864 6.65885Z"
                    fill="#2494F8"
                  />
                  <path
                    d="M11.7767 14.4476C11.8858 14.1566 11.7383 13.8325 11.4474 13.7234C11.1565 13.6144 10.8323 13.7618 10.7233 14.0528L11.7767 14.4476ZM7.27672 14.0528C7.1677 13.7618 6.8435 13.6144 6.5526 13.7234C6.2617 13.8325 6.11425 14.1566 6.22327 14.4476L7.27672 14.0528ZM10.7233 14.0528C10.4812 14.6986 9.81345 15.1877 9 15.1877V16.3127C10.2641 16.3127 11.3637 15.5495 11.7767 14.4476L10.7233 14.0528ZM9 15.1877C8.18655 15.1877 7.51875 14.6986 7.27672 14.0528L6.22327 14.4476C6.63626 15.5495 7.73587 16.3127 9 16.3127V15.1877Z"
                    fill="#2494F8"
                  />
                </svg>
              </div>
              <h2 className="title_notification">
                Tiết lộ điều vô hình: Trung tâm cộng đồng Michigan thúc đẩy nhận
                thức về chất lượng không khí
              </h2>
            </div>

            <div className="flex flex-row items-center justify-start gap-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g clip-path="url(#clip0_392_1447)">
                  <path
                    d="M6 12C2.6915 12 0 9.3085 0 6C0 2.6915 2.6915 0 6 0C9.3085 0 12 2.6915 12 6C12 9.3085 9.3085 12 6 12ZM6 1C3.243 1 1 3.243 1 6C1 8.757 3.243 11 6 11C8.757 11 11 8.757 11 6C11 3.243 8.757 1 6 1ZM8.5 6C8.5 5.7235 8.2765 5.5 8 5.5H6.5V3C6.5 2.7235 6.276 2.5 6 2.5C5.724 2.5 5.5 2.7235 5.5 3V6C5.5 6.2765 5.724 6.5 6 6.5H8C8.2765 6.5 8.5 6.2765 8.5 6Z"
                    fill="#2494F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_392_1447">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="time_notification">10 tháng 1, 2025 - 10:00</p>
            </div>
          </div>
        </Link>
        <Link to="/notification/1">
          <div className="flex flex-col gap-[10px] p-[20px] bg-notification">
            <div className="flex flex-row items-center justify-between gap-[20px]">
              <div className="flex items-center justify-center p-[6px] bg-notification-tick">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M13.6274 12.1875H4.37259V13.3125H13.6274V12.1875ZM13.1813 6.65885L13.44 8.94218L14.5579 8.81558L14.2992 6.53221L13.1813 6.65885ZM4.55998 8.94218L4.81864 6.65885L3.70079 6.53221L3.44214 8.81558L4.55998 8.94218ZM3.77028 10.7743C4.20878 10.2581 4.4833 9.61913 4.55998 8.94218L3.44214 8.81558C3.39027 9.27338 3.20489 9.70223 2.91294 10.0458L3.77028 10.7743ZM13.44 8.94218C13.5167 9.61913 13.7912 10.2581 14.2297 10.7743L15.0871 10.0458C14.7951 9.70223 14.6097 9.27338 14.5579 8.81558L13.44 8.94218ZM4.37259 12.1875C3.70749 12.1875 3.28443 11.3461 3.77028 10.7743L2.91294 10.0458C1.84867 11.2985 2.6837 13.3125 4.37259 13.3125V12.1875ZM13.6274 13.3125C15.3163 13.3125 16.1513 11.2985 15.0871 10.0458L14.2297 10.7743C14.7155 11.3461 14.2925 12.1875 13.6274 12.1875V13.3125ZM14.2992 6.53221C13.9878 3.78355 11.7209 1.6875 8.99999 1.6875V2.8125C11.1226 2.8125 12.9314 4.45274 13.1813 6.65885L14.2992 6.53221ZM4.81864 6.65885C5.06855 4.45274 6.87732 2.8125 8.99999 2.8125V1.6875C6.27908 1.6875 4.01216 3.78355 3.70079 6.53221L4.81864 6.65885Z"
                    fill="#2494F8"
                  />
                  <path
                    d="M11.7767 14.4476C11.8858 14.1566 11.7383 13.8325 11.4474 13.7234C11.1565 13.6144 10.8323 13.7618 10.7233 14.0528L11.7767 14.4476ZM7.27672 14.0528C7.1677 13.7618 6.8435 13.6144 6.5526 13.7234C6.2617 13.8325 6.11425 14.1566 6.22327 14.4476L7.27672 14.0528ZM10.7233 14.0528C10.4812 14.6986 9.81345 15.1877 9 15.1877V16.3127C10.2641 16.3127 11.3637 15.5495 11.7767 14.4476L10.7233 14.0528ZM9 15.1877C8.18655 15.1877 7.51875 14.6986 7.27672 14.0528L6.22327 14.4476C6.63626 15.5495 7.73587 16.3127 9 16.3127V15.1877Z"
                    fill="#2494F8"
                  />
                </svg>
              </div>
              <h2 className="title_notification">
                Tiết lộ điều vô hình: Trung tâm cộng đồng Michigan thúc đẩy nhận
                thức về chất lượng không khí
              </h2>
            </div>

            <div className="flex flex-row items-center justify-start gap-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g clip-path="url(#clip0_392_1447)">
                  <path
                    d="M6 12C2.6915 12 0 9.3085 0 6C0 2.6915 2.6915 0 6 0C9.3085 0 12 2.6915 12 6C12 9.3085 9.3085 12 6 12ZM6 1C3.243 1 1 3.243 1 6C1 8.757 3.243 11 6 11C8.757 11 11 8.757 11 6C11 3.243 8.757 1 6 1ZM8.5 6C8.5 5.7235 8.2765 5.5 8 5.5H6.5V3C6.5 2.7235 6.276 2.5 6 2.5C5.724 2.5 5.5 2.7235 5.5 3V6C5.5 6.2765 5.724 6.5 6 6.5H8C8.2765 6.5 8.5 6.2765 8.5 6Z"
                    fill="#2494F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_392_1447">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="time_notification">10 tháng 1, 2025 - 10:00</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotificationPage;
