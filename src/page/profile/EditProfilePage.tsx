import { useState } from "react";
import Img from "../../assets/img";
import HeaderDetailPage from "../../components/HeaderDetailPage";
import ModalNotification from "../../components/Modal/ModalNotification";

const EditProfilePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);
  return (
    <div className="max-w-md mx-auto bg-white w-full h-screen">
      <HeaderDetailPage titlePage="Chỉnh sủa thông tin cá nhân" />
      <div className="flex flex-col gap-2 h-screen pt-[150px] pb-5 px-5">
        <form
          method="POST"
          action="/profile-edit"
          className="relative z-0 w-full flex flex-col gap-[16px]"
        >
          <div className="avatar flex flex-row items-end gap-[14px]">
            <img src={Img.Avatar || Img.DefaultAvatar} alt="" />

            <button>Tải ảnh lên</button>
          </div>

          <div className="flex flex-col">
            <label htmlFor="nameAccount" className="title-login">
              Tên của bạn <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="nameAccount"
              name="nameAccount"
              placeholder="Nhập tên của bạn"
              className="w-full rounded-md border px-3 py-2 text-base"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="title-login">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nhập email"
              className="w-full rounded-md border px-3 py-2 text-base"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="title-login">
              Số điện thoại
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Nhập số điện thoại"
              className="w-full rounded-md border px-3 py-2 text-base"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="title-login">
              Số địa chỉ
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Nhập số địa chỉ"
              className="w-full rounded-md border px-3 py-2 text-base"
            />
          </div>

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md w-full font-semibold hover:bg-blue-600"
              onClick={handleOpen}
            >
              Lưu lại
            </button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <ModalNotification
          isOpen={isModalOpen}
          onClose={handleClose}
          title="Xác nhận lưu thông tin cập nhập"
          message="Bạn xác nhận lưu thông tin cập nhập hiện tại không?"
          confirmText="Đồng ý"
        />
      )}
    </div>
  );
};

export default EditProfilePage;
