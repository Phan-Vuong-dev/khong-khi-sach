import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import HeaderDetailPage from "../../components/HeaderDetailPage";
import { useState } from "react";
import ModalNotification from "../../components/Modal/ModalNotification";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { changePassword } from "../../slices/authSlice";
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

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, accessToken } = useSelector(
    (state: RootState) => state.auth
  );

  const handleOpen = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  const handleSubmit = async () => {
    // Kiểm tra mật khẩu mới và xác nhận mật khẩu
    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới và xác nhận mật khẩu không khớp.");
      return;
    }

    // Kiểm tra token
    if (!accessToken) {
      toast.error("Không tìm thấy token. Vui lòng đăng nhập lại.");
      return;
    }

    // Chuẩn bị dữ liệu gửi đến API
    const requestBody = {
      OldPassWord: oldPassword,
      NewPassWord: newPassword,
      ConfirmPassWord: confirmPassword,
    };

    try {
      // Gửi yêu cầu đổi mật khẩu
      const resultAction = await dispatch(changePassword(requestBody));

      // Kiểm tra kết quả
      if (changePassword.fulfilled.match(resultAction)) {
        const response = resultAction.payload as any; // Đảm bảo payload chứa phản hồi từ API
        toast(response.message || "Đổi mật khẩu thành công!");
        navigate("/profiles");
      } else {
        const errorResponse = resultAction.payload as any; // Đảm bảo payload chứa lỗi từ API
        toast.error(
          errorResponse.message || "Đổi mật khẩu thất bại. Vui lòng thử lại."
        );
      }
    } catch (error) {
      console.error("Change password error:", error);
      toast.error("Đổi mật khẩu thất bại. Vui lòng thử lại.");
    }

    setModalOpen(false);
  };

  return (
    <div className="w-full h-screen max-w-md mx-auto bg-white">
      <HeaderDetailPage titlePage="Đổi mật khẩu" />
      <div className="flex flex-col items-center gap-4 h-screen pt-[150px] pb-5 px-5">
        <form
          method="POST"
          action="/profile-edit"
          className="relative z-0 w-full flex flex-col gap-[16px]"
        >
          <PasswordInput
            id="oldPassword"
            name="oldPassword"
            placeholder="Mật khẩu cũ"
            label="Mật khẩu cũ"
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

          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={handleOpen}
              disabled={loading}
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
          onConfirm={handleSubmit} // Add onConfirm handler
        />
      )}
    </div>
  );
};

export default ChangePasswordPage;
