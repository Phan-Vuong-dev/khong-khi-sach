import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { forgotPassword } from "../slices/authSlice";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultAction = await dispatch(forgotPassword(email));
    if (forgotPassword.fulfilled.match(resultAction)) {
      toast.success("Mã xác nhận đã được gửi đến email của bạn.");
    } else {
      toast.error("Gửi mã xác nhận thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-[100vh] justify-center flex flex-col">
      <h1 className="text-2xl font-bold text-center">Quên mật khẩu</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="title-login">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Nhập email của bạn"
            className="w-full px-3 py-2 text-base border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          Gửi mã xác nhận
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
