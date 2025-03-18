import { Link, useLocation } from "react-router-dom";
import Img from "../assets/img";

const FooterPage = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      url: "/",
      name: "Trang chủ",
      icon: Img.HomeIcon,
      activeIcon: Img.HomeIconActive,
    },
    {
      url: "/citys",
      name: "Thành phố",
      icon: Img.CityIcon,
      activeIcon: Img.CityIconActive,
    },
    {
      url: "/files",
      name: "Hồ sơ",
      icon: Img.FileIcon,
      activeIcon: Img.FileIconActive,
    },
    {
      url: "/news",
      name: "Tin Tức",
      icon: Img.NewIcon,
      activeIcon: Img.NewIconActive,
    },
    {
      url: "/profiles",
      name: "Tài khoản",
      icon: Img.AccIcon,
      activeIcon: Img.AccIconActive,
    },
  ];

  return (
    <div className="bg-white max-w-md mx-auto footer-shadow">
      <div className="flex flex-row justify-between px-[20px] pt-[10px] pb-[20px]">
        {menuItems.map((item) => (
          <Link
            to={item.url}
            key={item.name}
            className={`icon_card ${currentPath === item.url ? "active" : ""}`}
          >
            <img
              src={currentPath === item.url ? item.activeIcon : item.icon}
              alt=""
            />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterPage;
