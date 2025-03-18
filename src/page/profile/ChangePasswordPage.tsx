import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import HeaderDetailPage from "../../components/HeaderDetailPage";
import { useState } from "react";
import ModalNotification from "../../components/Modal/ModalNotification";

const PasswordInput = ({
  id,
  name,
  placeholder,
  label,
  value,
  onChange,
}: {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="title-login">
        {label} <span className="text-red-600">*</span>
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          className="w-full rounded-md border px-3 py-2 text-base"
          value={value}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-gray-500 focus:outline-none hover:text-gray-600"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
      </div>
    </div>
  );
};

const ChangePasswordPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  return (
    <div className="max-w-md mx-auto bg-white w-full h-screen">
      <HeaderDetailPage titlePage="Đổi mật khẩu" />
      <div className="flex flex-col items-center gap-4 h-screen pt-[150px] pb-5 px-5">
        <form
          method="POST"
          action="/profile-edit"
          className="relative z-0 w-full flex flex-col gap-[16px]"
        >
          <PasswordInput
            id="password"
            name="password"
            placeholder="Mật khẩu cũ"
            label="Mật khẩu cũ"
            value=""
            onChange={() => {}}
          />

          <PasswordInput
            id="newPassword"
            name="newPassword"
            placeholder="Mật khẩu mới"
            label="Mật khẩu mới"
            value=""
            onChange={() => {}}
          />

          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu mới"
            label="Xác nhận mật khẩu mới"
            value=""
            onChange={() => {}}
          />

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md w-full font-semibold hover:bg-blue-600"
              onClick={handleOpen}
            >
              Đồng ý
            </button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <ModalNotification
          isOpen={isModalOpen}
          onClose={handleClose}
          title="Xác nhận đổi mật khẩu?"
          message="Bạn xác nhận đổi mật khẩu hiện tại, bạn cần đăng xuất và đăng nhập tài khoản với mật khẩu mới"
          confirmText="Đồng ý"
        />
      )}
    </div>
  );
};

export default ChangePasswordPage;
