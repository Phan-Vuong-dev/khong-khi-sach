import { useState, useEffect, FormEvent } from "react";
import Img from "../assets/img";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { login } from "../slices/authSlice";
import { toast } from "react-toastify"; // Import toast

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redux state and actions
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { accessToken, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (accessToken) {
      navigate("/"); // Redirect to the dashboard or any other page
    }
  }, [accessToken, navigate]);

  const togglePasswordVisibility = () => {
    setPasswordType((prevType: "password" | "text") =>
      prevType === "password" ? "text" : "password"
    );
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultAction = await dispatch(
      login({ Username: email, Password: password })
    );
    if (login.fulfilled.match(resultAction)) {
      toast.success("Đăng nhập thành công!");
      navigate("/"); // Redirect to the dashboard or any other page
    } else {
      toast.error("Đăng nhập thất bại!");
    }
  };

  // Social login handlers (to be implemented)
  const handleGoogleLogin = () => {
    // Implement Google login
    console.log("Google login clicked");
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login
    console.log("Facebook login clicked");
  };

  return (
    <div className="px-[20px] py-[62px] flex flex-col items-center justify-between h-screen max-w-md mx-auto bg-white">
      <div className="w-full flex flex-col items-center gap-[24px]">
        <Link to="/">
          <img src={Img.LogoMax} alt="" className="w-[226px]" />
        </Link>

        <form
          onSubmit={handleSubmit}
          className="relative z-0 w-full flex flex-col gap-[24px]"
        >
          <div>
            <center>
              <span className="titleH1">Đăng nhập</span>
            </center>
          </div>

          <div>
            <label htmlFor="email" className="block title-login">
              Email <span className="text-lg text-red-600">*</span>
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border rounded-md input-login"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block title-login">
              Mật khẩu <span className="text-lg text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                type={passwordType}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                autoComplete="current-password"
                className="w-full border rounded-md input-login"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600"
                >
                  {showPassword ? (
                    <FaRegEye className="icon-eye" />
                  ) : (
                    <FaRegEyeSlash className="icon-eye" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="flex items-center justify-center w-full button-login"
              disabled={loading}
            >
              Đăng nhập
            </button>
          </div>
          {error && <p className="text-red-600">{error}</p>}
        </form>
        <Link
          to="/forgot-password"
          className="text-base font-bold text-center text-shadow-login"
        >
          Quên mật khẩu?
        </Link>
        <p>Hoặc đăng nhập bằng</p>
        <div className="flex flex-row items-center justify-between w-full gap-2">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex flex-row items-center justify-center gap-2 login-card-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <g clipPath="url(#clip0_25_333)">
                <path
                  d="M4.93242 12.8111L4.23625 15.41L1.69176 15.4639C0.931328 14.0534 0.5 12.4397 0.5 10.7249C0.5 9.06664 0.903281 7.50289 1.61812 6.12598H1.61867L3.88398 6.54129L4.87633 8.79301C4.66863 9.39852 4.55543 10.0485 4.55543 10.7249C4.55551 11.4589 4.68848 12.1623 4.93242 12.8111Z"
                  fill="#FBBB00"
                />
                <path
                  d="M20.3253 8.85669C20.4401 9.46161 20.5 10.0863 20.5 10.7248C20.5 11.4408 20.4247 12.1391 20.2813 12.8127C19.7945 15.105 18.5225 17.1067 16.7605 18.5232L16.7599 18.5226L13.9066 18.377L13.5028 15.8561C14.672 15.1704 15.5858 14.0974 16.0671 12.8127H10.7198V8.85669H16.1451H20.3253Z"
                  fill="#518EF8"
                />
                <path
                  d="M16.7599 18.5226L16.7604 18.5231C15.0467 19.9006 12.8698 20.7247 10.5 20.7247C6.69177 20.7247 3.3808 18.5962 1.69177 15.4638L4.93244 12.811C5.77693 15.0649 7.95111 16.6693 10.5 16.6693C11.5956 16.6693 12.622 16.3731 13.5027 15.8561L16.7599 18.5226Z"
                  fill="#28B446"
                />
                <path
                  d="M16.883 3.02704L13.6434 5.67923C12.7319 5.10946 11.6544 4.78032 10.5 4.78032C7.89341 4.78032 5.67856 6.45833 4.87638 8.79298L1.61868 6.12595H1.61813C3.28243 2.91716 6.63517 0.724854 10.5 0.724854C12.9264 0.724854 15.1511 1.58915 16.883 3.02704Z"
                  fill="#F14336"
                />
              </g>
              <defs>
                <clipPath id="clip0_25_333">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5 0.724854)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>Google</p>
          </button>
          <button
            onClick={handleFacebookLogin}
            type="button"
            className="flex flex-row items-center justify-center gap-2 login-card-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clipPath="url(#clip0_25_368)">
                <path
                  d="M10 20.7249C15.5228 20.7249 20 16.2477 20 10.7249C20 5.20201 15.5228 0.724854 10 0.724854C4.47715 0.724854 0 5.20201 0 10.7249C0 16.2477 4.47715 20.7249 10 20.7249Z"
                  fill="#3B5998"
                />
                <path
                  d="M12.514 11.1162H10.7296V17.6534H8.02614V11.1162H6.74036V8.81884H8.02614V7.33215C8.02614 6.26901 8.53115 4.60425 10.7537 4.60425L12.7563 4.61263V6.84265H11.3033C11.0649 6.84265 10.7298 6.96173 10.7298 7.46888V8.82098H12.7502L12.514 11.1162Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_25_368">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.724854)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p>Facebook</p>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <p className="text-lg">Bạn chưa có tài khoản?</p>
        <Link className="text-lg font-bold text-[#2494F8]" to="/register">
          Đăng ký
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
