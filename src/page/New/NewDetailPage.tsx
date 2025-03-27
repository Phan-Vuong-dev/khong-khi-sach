import Slider from "react-slick";
import HeaderDetailPage from "../../components/HeaderDetailPage";
import { formatDate } from "../../utils/formatDateUtils";
import CardNewSlider from "../../components/card/CardNewSlider";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState, useDispatch, useSelector } from "../../store/store";
import { fetchPostDetail } from "../../slices/postSlice";

const NewDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchPostDetail(id));
    }
  }, [id, dispatch]);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  const postDetail = posts[0];

  console.log("postDetail", postDetail);

  const settings = {
    dots: true,
    centerMode: false,
    centerPadding: "20px",
    slidesToShow: 1.05,
    infinite: false,
    slidesToScroll: 1,
    pauseOnHover: true,
    customPaging: () => (
      <div className="custom-dot">
        <span>
          <div className="w-[6px] h-[6px] bg-[#C4C4C4] rounded-full"></div>
        </span>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="relative w-full max-w-md min-h-screen mx-auto bg-white">
      <HeaderDetailPage titlePage="Chi tiết tin tức" />
      {postDetail && (
        <div>
          <h1>{postDetail.headline}</h1>
          <p>{postDetail.content}</p>
        </div>
      )}
      {/* {postDetail.map((item, index) => {
        const postDate = item.date ? new Date(item.date) : null;
        return (
          <div
            className="post_detail p-[20px] flex flex-col gap-4 pt-[150px] pb-5 px-5"
            key={index}
          >
            <img src={item.image} alt="" className="rounded-xl" />
            <h2 className="font-bold text-base/5 ">{item.headline}</h2>
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
              <p>{postDate ? formatDate(postDate) : "Ngày không xác định"}</p>
            </div>
            <p
              className="content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></p>
          </div>
        );
      })} */}
      {/* <div className="slider_row bg-[#f2f2f2] flex flex-col gap-5  pb-[70px]">
        <h2 className="font-bold text-base/5">Tin tức cùng chuyên mục</h2>
        <Slider {...settings}>
          {post.map((item, index) => {
            const postDate = item.date ? new Date(item.date) : null;
            return (
              <CardNewSlider
                key={index}
                indexPost={index}
                imgPost={item.image}
                titlePost={item.headline}
                timeDate={
                  postDate ? formatDate(postDate) : "Ngày không xác định"
                }
                idPost={item.id}
              />
            );
          })}
        </Slider>
      </div> */}
    </div>
  );
};

export default NewDetailPage;
