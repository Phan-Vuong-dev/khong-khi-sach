import HeaderDetailPage from "../../components/HeaderDetailPage";

const NotificationDetailsPage = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white">
      <HeaderDetailPage titlePage="Chi tiết thông báo" />
      <div className="min-h-screen pt-[128px] pb-[70px]">
        <div className="flex flex-col gap-[20px] py-[20px]">
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
      </div>
    </div>
  );
};

export default NotificationDetailsPage;
