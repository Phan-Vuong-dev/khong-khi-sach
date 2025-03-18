import Img from "../assets/img";

const LoadingPage = () => {
  return (
    <div className="max-w-lg w-full wrapper bg-white min-h-[100vh] absolute z-50 top-0 left-0 flex items-center justify-center">
      <img className="box" src={Img.LogoMax} alt="" />
    </div>
  );
};

export default LoadingPage;
