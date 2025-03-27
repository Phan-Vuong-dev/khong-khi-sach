import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import HeaderDetailPage from "../../components/HeaderDetailPage";
import { useState } from "react";
import ModalNotification from "../../components/Modal/ModalNotification";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { changePassword, verifyChangePassword } from "../../slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
          className="w-full px-3 py-2 text-base border rounded-md"
          value={value}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
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

const ReconfirmPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleOpen = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới và xác nhận mật khẩu không khớp!");
      return;
    }

    try {
      await dispatch(
        verifyChangePassword({
          code: oldPassword,
          password: newPassword,
          confirmPassword: confirmPassword,
        })
      ).unwrap();
      setModalOpen(false);
    } catch (error: any) {
      console.error("Error changing password:", error);
    }
  };

  return (
    <div className="w-full h-screen max-w-md mx-auto bg-white">
      <HeaderDetailPage titlePage="Đổi mật khẩu mới" />
      <div className="flex flex-col items-center gap-4 h-screen pt-[150px] pb-5 px-5">
        <form
          method="POST"
          action="/profile-edit"
          className="relative z-0 w-full flex flex-col gap-[16px]"
        >
          <PasswordInput
            id="oldPassword"
            name="oldPassword"
            placeholder="Nhập code"
            label="Code"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />

          <PasswordInput
            id="newPassword"
            name="newPassword"
            placeholder="Mật khẩu mới"
            label="Mật khẩu mới"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu mới"
            label="Xác nhận mật khẩu mới"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="flex items-center justify-center w-full my-2">
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
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
          title="Xác nhận mật khẩu mới"
          message="Đăng nhập tài khoản với mật khẩu mới"
          confirmText="Đồng ý"
          onConfirm={handleSubmit}
        />
      )}
    </div>
  );
};

export default ReconfirmPassword;
