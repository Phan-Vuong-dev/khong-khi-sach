import { Link } from "react-router-dom";
import Img from "../../assets/img";
import HeaderPage from "../../components/HeaderPage";
import ModalNotification from "../../components/Modal/ModalNotification";
import { useState } from "react";

const ProfilePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);
  return (
    <div className="max-w-md mx-auto bg-white w-full h-screen">
      <HeaderPage />
      <div className="flex flex-col items-center justify-center gap-[20px] p-[20px] h-[80vh] bg-white">
        <div className="avatar_title flex flex-col items-center justify-center gap-[14px]">
          <img src={Img.Avatar || Img.DefaultAvatar} alt="" />
          <h3>Trung Trần</h3>
        </div>

        <Link to="/profile-edit/:id" className="button_profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49H12.15H12.17C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
              fill="#2494F8"
            />
            <path
              d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z"
              fill="#2494F8"
            />
          </svg>
          <p>Tài khoản</p>
        </Link>
        <Link to="/policy-terms" className="button_profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7281 21.9137C11.8388 21.9715 11.9627 22.0009 12.0865 22C12.2103 21.999 12.3331 21.9686 12.4449 21.9097L16.0128 20.0025C17.0245 19.4631 17.8168 18.8601 18.435 18.1579C19.779 16.6282 20.5129 14.6758 20.4998 12.6626L20.4575 6.02198C20.4535 5.25711 19.9511 4.57461 19.2082 4.32652L12.5707 2.09956C12.1711 1.96424 11.7331 1.96718 11.3405 2.10643L4.72824 4.41281C3.9893 4.67071 3.496 5.35811 3.50002 6.12397L3.54231 12.7597C3.5554 14.7758 4.31448 16.7194 5.68062 18.2335C6.3048 18.9258 7.10415 19.52 8.12699 20.0505L11.7281 21.9137ZM10.7836 14.1089C10.9326 14.2521 11.1259 14.3227 11.3192 14.3207C11.5125 14.3198 11.7047 14.2472 11.8517 14.1021L15.7508 10.2581C16.0438 9.96882 16.0408 9.50401 15.7448 9.21866C15.4478 8.9333 14.9696 8.93526 14.6766 9.22454L11.3081 12.5449L9.92885 11.2191C9.63186 10.9337 9.15467 10.9367 8.8607 11.226C8.56774 11.5152 8.57076 11.98 8.86775 12.2654L10.7836 14.1089Z"
              fill="#2494F8"
            />
          </svg>
          <p>Điều khoản chính sách</p>
        </Link>
        <Link to="/change-password" className="button_profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.7688 8.71387H16.2312C18.5886 8.71387 20.5 10.5831 20.5 12.8886V17.8254C20.5 20.1309 18.5886 22.0001 16.2312 22.0001H7.7688C5.41136 22.0001 3.5 20.1309 3.5 17.8254V12.8886C3.5 10.5831 5.41136 8.71387 7.7688 8.71387ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.942 12.8891 16.4551V14.249C12.8891 13.772 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.772 11.1109 14.249V16.4551C11.1109 16.942 11.5072 17.3295 11.9949 17.3295Z"
              fill="#2494F8"
            />
            <path
              d="M17.5228 7.39595V8.86667C17.1672 8.7673 16.7912 8.71761 16.4051 8.71761H15.7446V7.39595C15.7446 5.37868 14.068 3.73903 12.0052 3.73903C9.94245 3.73903 8.26582 5.36874 8.25566 7.37608V8.71761H7.60533C7.20904 8.71761 6.83307 8.7673 6.47742 8.87661V7.39595C6.48758 4.41476 8.9568 2 11.9849 2C15.0536 2 17.5228 4.41476 17.5228 7.39595Z"
              fill="#2494F8"
            />
          </svg>
          <p>Đổi mật khẩu</p>
        </Link>
        <button className="button_profile_out" onClick={handleOpen}>
          Đăng xuất
        </button>
      </div>

      {isModalOpen && (
        <ModalNotification
          isOpen={isModalOpen}
          onClose={handleClose}
          title="Đăng xuất tài khoản?"
          message="Bạn xác nhận đăng xuất tài khoản?"
          confirmText="Đăng xuất"
        />
      )}
    </div>
  );
};

export default ProfilePage;
