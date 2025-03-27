import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import HeaderDetailPage from "../components/HeaderDetailPage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { register } from "../slices/authSlice";
import { toast } from "react-toastify"; // Import toast
import { RegisterData } from "../types";

const PasswordInput = ({
  id,
  name,
  placeholder,
  label,
  isRequired = true,
  value,
  onChange,
}: {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  isRequired?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="title-login">
        {label} {isRequired && <span className="text-red-600">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          required={isRequired}
          className="w-full px-3 py-2 text-base border rounded-md"
          value={value}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-gray-500 focus:outline-none hover:text-gray-600"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nameAccount: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [message, setMessage] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedFormData = { ...prev, [name]: value };
      validateForm(updatedFormData);
      return updatedFormData;
    });
  };

  const validateForm = (data = formData) => {
    const newErrors: { [key: string]: string } = {};

    if (!data.nameAccount) newErrors.nameAccount = "Tên không được để trống.";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = "Email không hợp lệ.";
    if (data.phoneNumber && !/^\d+$/.test(data.phoneNumber))
      newErrors.phoneNumber = "Số điện thoại chỉ được chứa số.";
    if (!data.password) newErrors.password = "Mật khẩu không được để trống.";
    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Mật khẩu không khớp.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const currentDate = new Date().toISOString();

    const apiBody: RegisterData = {
      FullName: formData.nameAccount,
      AddressDetail: formData.address,
      Dob: currentDate,
      Email: formData.email,
      Username: formData.email,
      Password: formData.password,
      Photo:
        "http://tuthienthat.vn/wp-content/uploads/2025/03/avatar-default.jpg",
      Phone: formData.phoneNumber,
    };

    try {
      const resultAction = await dispatch(register(apiBody));
      if (register.fulfilled.match(resultAction)) {
        toast.success("Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.");
        setFormData({
          nameAccount: "",
          email: "",
          phoneNumber: "",
          address: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      } else {
        toast.error("Đăng ký thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white">
      <HeaderDetailPage titlePage="Đăng ký" />
      <div className="flex flex-col justify-between h-screen pt-[150px] pb-5 px-5">
        <form
          method="POST"
          action="/register"
          className="relative z-0 flex flex-col w-full gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="nameAccount" className="title-login">
              Tên của bạn <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="nameAccount"
              name="nameAccount"
              placeholder="Nhập tên của bạn"
              className="w-full px-3 py-2 text-base border rounded-md"
              value={formData.nameAccount}
              onChange={handleChange}
            />
            {errors.nameAccount && (
              <span className="text-sm text-red-600">{errors.nameAccount}</span>
            )}
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
              className="w-full px-3 py-2 text-base border rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-sm text-red-600">{errors.email}</span>
            )}
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
              className="w-full px-3 py-2 text-base border rounded-md"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="text-sm text-red-600">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="title-login">
              Địa chỉ
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Nhập địa chỉ"
              className="w-full px-3 py-2 text-base border rounded-md"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <PasswordInput
            id="password"
            name="password"
            placeholder="Mật khẩu"
            label="Mật khẩu"
            isRequired
            value={formData.password}
            onChange={handleChange}
          />
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu"
            label="Xác nhận mật khẩu"
            isRequired
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-600">
              {errors.confirmPassword}
            </span>
          )}

          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
              disabled={loading}
            >
              Đăng ký
            </button>
          </div>
        </form>

        {message && (
          <p className="mt-2 font-semibold text-center text-green-600">
            {message}
          </p>
        )}

        <div className="flex flex-row items-center justify-center gap-2">
          <p className="text-lg">Bạn đã có tài khoản?</p>
          <Link className="text-lg font-bold text-[#2494F8]" to="/login">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
