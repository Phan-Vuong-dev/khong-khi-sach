import { useNavigate } from "react-router-dom";
import Img from "../assets/img";
import { HeaderDetailPageProps } from "../types";

const HeaderDetailPage: React.FC<HeaderDetailPageProps> = ({ titlePage }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="fixed max-w-md w-full">
      <img src={Img.BgDetail} alt="" className="w-full" />

      <div className="text_header_detail">
        <button className="button_header_detail" onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z"
              fill="white"
            />
          </svg>
        </button>
        <h2 className="title_text_header_detail">{titlePage}</h2>
        <div className="w-9"></div>
      </div>
    </div>
  );
};

export default HeaderDetailPage;
