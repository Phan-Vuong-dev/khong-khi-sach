import HeaderPage from "../../components/HeaderPage";
import { formatDate } from "../../utils/formatDateUtils";
import CardNew from "../../components/card/CardNew";

const NewPage = () => {
  const post = [
    {
      id: 1,
      headline:
        "Tiết lộ điều vô hình: Trung tâm cộng đồng Michigan thúc đẩy nhận thức về...",
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

  return (
    <div className="max-w-md mx-auto bg-white w-full">
      <HeaderPage />
      <div className="min-h-screen pt-[128px] pb-[70px]">
        <div className="flex flex-col gap-[20px] py-[20px]">
          {post.map((item, index) => {
            const postDate = item.date ? new Date(item.date) : null;
            return (
              <CardNew
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
        </div>
      </div>
    </div>
  );
};

export default NewPage;
