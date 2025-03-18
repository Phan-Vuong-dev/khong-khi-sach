import Img from "../assets/img";

const HeaderPage = () => {
  return (
    <div className="fixed max-w-md w-full z-30">
      <img src={Img.BgDetail} alt="" className="w-full" />

      <div className="absolute bottom-0 left-0 px-[20px] py-[8px] flex flex-row items-center justify-between w-full">
        <img src={Img.Logo} alt="" className="w-[165px] h-[45px]" />
        <div>
          <div className="icon_notification">
            <img src={Img.Notification} alt="" />
            <samp>2</samp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
