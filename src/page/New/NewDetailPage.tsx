import Slider from "react-slick";
import HeaderDetailPage from "../../components/HeaderDetailPage";
import { formatDate } from "../../utils/formatDateUtils";
import CardNewSlider from "../../components/card/CardNewSlider";

const NewDetailPage = () => {
  const postDetail = [
    {
      id: 1,
      headline:
        "Tiết lộ điều vô hình: Trung tâm cộng đồng Michigan thúc đẩy nhận thức về...",
      date: "2025-01-10T10:00:00",
      link: "Xem thêm",
      image: "https://watv.org/wp-content/uploads/2020/06/good-weather.jpg",
      content:
        "<p>Chất lượng không khí của Michigan hiện đang nằm trong phạm vi vừa phải trên Chỉ số chất lượng không khí của Hoa Kỳ trên toàn tiểu bang kể từ ngày 22 tháng 6 năm 2023 (1). Tuy nhiên, một số khu vực của Bắc Michigan và Bán đảo Thượng có chất lượng không khí không lành mạnh hoặc không lành mạnh cho các nhóm nhạy cảm. Nồng độ chất lượng không khí kém đã được đo lường&nbsp;Leland&nbsp;và&nbsp;Thành phố Boyne&nbsp;ở bán đảo phía tây bắc.<br /><br />Chất lượng không khí của Michigan hiện đang nằm trong phạm vi vừa phải trên Chỉ số chất lượng không khí của Hoa Kỳ trên toàn tiểu bang kể từ ngày 22 tháng 6 năm 2023 (1). Tuy nhiên, một số khu vực của Bắc Michigan và Bán đảo Thượng có chất lượng không khí không lành mạnh hoặc không lành mạnh cho các nhóm nhạy cảm. <br /><br /> Chất lượng không khí của Michigan hiện đang nằm trong phạm vi vừa phải trên Chỉ số chất lượng không khí của Hoa Kỳ trên toàn tiểu bang kể từ ngày 22 tháng 6 năm 2023 (1). Tuy nhiên, một số khu vực của Bắc Michigan và Bán đảo Thượng có chất lượng không khí không lành mạnh hoặc không lành mạnh cho các nhóm nhạy cảm. Nồng độ chất lượng không khí kém đã được đo lường&nbsp;Leland&nbsp;và&nbsp;Thành phố Boyne&nbsp;ở bán đảo phía tây bắc.<br /><br />Chất lượng không khí của Michigan hiện đang nằm trong phạm vi vừa phải trên Chỉ số chất lượng không khí của Hoa Kỳ trên toàn tiểu bang kể từ ngày 22 tháng 6 năm 2023 (1). Tuy nhiên, một số khu vực của Bắc Michigan và Bán đảo Thượng có chất lượng không khí không lành mạnh hoặc không lành mạnh cho các nhóm nhạy cảm.</p>",
    },
  ];

  const post = [
    {
      id: 1,
      headline:
        "Tiết lộ điều vô hình: Trung tâm cộng đồng Michigan thúc đẩy nhận thức về Michigan thúc đẩy nhận thức về...",
      date: "2025-01-10T10:00:00",
      link: "Xem thêm",
      image: "https://watv.org/wp-content/uploads/2020/06/good-weather.jpg",
      content:
        "Trung tâm cộng đồng Michigan đã khởi xướng một chiến dịch nhằm nâng cao nhận thức về vấn đề môi trường.",
    },
    {
      id: 2,
      headline:
        "Tiết lộ điều vô hình: Trung tâm cộng đồng Michigan thúc đẩy nhận thức về...",
      date: "2025-01-10T10:00:00",
      link: "Xem thêm",
      image: "https://watv.org/wp-content/uploads/2020/06/good-weather.jpg",
      content:
        "Nỗ lực mới từ trung tâm Michigan tập trung vào giáo dục cộng đồng về tác động của biến đổi khí hậu.",
    },
    {
      id: 3,
      headline:
        "Tiết lộ điều vô hình: Trung tâm cộng đồng Michigan thúc đẩy nhận thức về...",
      date: "2025-01-10T10:00:00",
      link: "Xem thêm",
      image: "https://watv.org/wp-content/uploads/2020/06/good-weather.jpg",
      content:
        "Các hoạt động nâng cao nhận thức sẽ bao gồm hội thảo, sự kiện ngoài trời, và các chiến dịch truyền thông.",
    },
    {
      id: 4,
      headline:
        "Tiết lộ điều vô hình: Trung tâm cộng đồng Michigan thúc đẩy nhận thức về...",
      date: "2025-01-10T10:00:00",
      link: "Xem thêm",
      image: "https://watv.org/wp-content/uploads/2020/06/good-weather.jpg",
      content:
        "Michigan hy vọng các hoạt động này sẽ khuyến khích cộng đồng hành động vì một tương lai bền vững hơn.",
    },
    {
      id: 5,
      headline:
        "Tiết lộ điều vô hình: Trung tâm cộng đồng Michigan thúc đẩy nhận thức về...",
      date: "2025-01-10T10:00:00",
      link: "Xem thêm",
      image: "https://watv.org/wp-content/uploads/2020/06/good-weather.jpg",
      content:
        "Chương trình nhận được sự ủng hộ mạnh mẽ từ các tổ chức phi lợi nhuận và chính quyền địa phương.",
    },
    {
      id: 6,
      headline:
        "Tiết lộ điều vô hình: Trung tâm cộng đồng Michigan thúc đầu phân thức về",
      date: null,
      link: null,
      image: "https://watv.org/wp-content/uploads/2020/06/good-weather.jpg",
      content:
        "Thông tin chi tiết sẽ được cập nhật trong các sự kiện sắp tới tại trung tâm cộng đồng Michigan.",
    },
  ];

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
    <div className="max-w-md mx-auto bg-white w-full min-h-screen relative">
      <HeaderDetailPage titlePage="Chi tiết tin tức" />
      {postDetail.map((item, index) => {
        const postDate = item.date ? new Date(item.date) : null;
        return (
          <div
            className="post_detail p-[20px] flex flex-col gap-4 pt-[150px] pb-5 px-5"
            key={index}
          >
            <img src={item.image} alt="" className="rounded-xl" />
            <h2 className="text-base/5 font-bold ">{item.headline}</h2>
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
      })}
      <div className="slider_row bg-[#f2f2f2] flex flex-col gap-5  pb-[70px]">
        <h2 className="text-base/5 font-bold">Tin tức cùng chuyên mục</h2>
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
      </div>
    </div>
  );
};

export default NewDetailPage;
