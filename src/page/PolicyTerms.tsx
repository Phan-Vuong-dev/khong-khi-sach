import Img from "../assets/img";
import HeaderDetailPage from "../components/HeaderDetailPage";

const PolicyTerms = () => {
  return (
    <div className="max-w-md mx-auto bg-white w-full h-screen">
      <HeaderDetailPage titlePage="Điều khoản chính sách" />
      <div className="flex flex-col items-center gap-4 h-screen pt-[150px] pb-5 px-5">
        <img
          src={Img.LogoMax}
          alt=""
          className="max-w-[180px]  pb-[70px] w-full "
        />
        <p className="text-lg font-bold text-center">Version 1.1</p>
        <p className="text-lg font-normal text-justify">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default PolicyTerms;
