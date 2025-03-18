import { Link } from "react-router-dom";
import { CardNewProps } from "../../types";

const CardNewSlider: React.FC<CardNewProps> = ({
  indexPost,
  imgPost,
  titlePost,
  timeDate,
  idPost,
}) => {
  return (
    <div className="card_new_slider flex flex-row gap-2" key={indexPost}>
      <div className="img w-full">
        <img src={imgPost} alt={titlePost} />
      </div>
      <div className="content">
        <h2>{titlePost}</h2>
        <div className="time">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <g clipPath="url(#clip0_30_863)">
              <path
                d="M6 12C2.6915 12 0 9.3085 0 6C0 2.6915 2.6915 0 6 0C9.3085 0 12 2.6915 12 6C12 9.3085 9.3085 12 6 12ZM6 1C3.243 1 1 3.243 1 6C1 8.757 3.243 11 6 11C8.757 11 11 8.757 11 6C11 3.243 8.757 1 6 1ZM8.5 6C8.5 5.7235 8.2765 5.5 8 5.5H6.5V3C6.5 2.7235 6.276 2.5 6 2.5C5.724 2.5 5.5 2.7235 5.5 3V6C5.5 6.2765 5.724 6.5 6 6.5H8C8.2765 6.5 8.5 6.2765 8.5 6Z"
                fill="#2494F8"
              />
            </g>
            <defs>
              <clipPath id="clip0_30_863">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>{timeDate}</p>
        </div>
        <Link to={`/news/${idPost}`} className="link">
          Xem thêm
        </Link>
      </div>
    </div>
  );
};

export default CardNewSlider;
