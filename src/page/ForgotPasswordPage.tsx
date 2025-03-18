import HeaderDetailPage from "../components/HeaderDetailPage";

const ForgotPasswordPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white w-full h-screen">
      <HeaderDetailPage titlePage="Quên mật khẩu" />
      <div className="flex flex-col gap-2 h-screen pt-[150px] pb-5 px-5">
        <h2 className="text-lg text-[#000] text-center">
          Nhập email đăng ký tài khoản để xác thực
        </h2>
        <form
          method="POST"
          action="/forgot-password"
          className="relative z-0 w-full flex flex-col gap-4"
        >
          <div>
            <label htmlFor="email" className="block title-login">
              Email <span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full input-login rounded-md border"
              required
            />
          </div>

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="button-login w-full  flex items-center justify-center"
            >
              Tiếp theo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
