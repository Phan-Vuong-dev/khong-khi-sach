import { useEffect, useState } from "react";
import HeaderPage from "../../components/HeaderPage";

const CitysPage = () => {
  // time title
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const formatDate = (date: Date) => {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = date.toLocaleDateString("vi-VN", options);
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${formattedDate} - ${hours}:${minutes}`;
    };

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(formatDate(now));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000); // Cập nhật mỗi phút

    return () => clearInterval(intervalId); // Dọn dẹp interval khi component unmount
  }, []);

  // json
  const data = [
    { id: 1, city: "Tp. Hà Nội", AQI: "100-150" },
    { id: 2, city: "Tp. Hồ Chí Minh", AQI: "150-200" },
    { id: 3, city: "Tp. Đà Nẵng", AQI: "200-250" },
    { id: 4, city: "Tp. Hải Phòng", AQI: "250-300" },
    { id: 5, city: "Thái Bình", AQI: "100-150" },
    { id: 6, city: "Thái Bình", AQI: "100-150" },
    { id: 7, city: "Thái Bình", AQI: "100-150" },
    { id: 8, city: "Thái Bình", AQI: "100-150" },
    { id: 9, city: "Thái Bình", AQI: "100-150" },
    { id: 10, city: "Thái Bình", AQI: "100-150" },
    { id: 11, city: "Thái Bình", AQI: "100-150" },
  ];

  return (
    <div className="max-w-md mx-auto bg-white w-full">
      <HeaderPage />
      <div className="min-h-screen pt-[128px] pb-[70px]">
        <div className="time_line flex flex-row items-center justify-center gap-[10px] bg-city py-[10px] px-[20px]">
          <div className="flex flex-row items-center gap-[6px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <circle cx="5.5" cy="5.5" r="5" fill="#E40004" />
            </svg>
            <p className="text-[#E40004] text-lg font-bold">Trực tiếp:</p>
          </div>
          <p className="text-lg font-normal text-black">{currentTime}</p>
        </div>
        <div className="flex flex-col gap-[20px] py-[20px] px-[10px]  bg-white">
          <div className="overflow-auto w-full table_city">
            <table className="table border-separate w-full">
              <thead className="bg-[#E8F5FF]">
                <tr>
                  <th className="title_tables p-[10px] text-left w-[14%]">#</th>
                  <th className="title_tables_city">Tỉnh/Thành phố</th>
                  <th className="title_tables w-[22%]">AQI</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td className="bg-stt">
                      <span className="title_tables_city">{index + 1}</span>
                    </td>
                    <td className="title_tables">{item.city}</td>
                    <td
                      className={`title_tables_aqi ${
                        parseInt(item.AQI.split("-")[0]) <= 150
                          ? "aqi_100"
                          : parseInt(item.AQI.split("-")[0]) <= 200
                          ? "aqi_150"
                          : "aqi_200"
                      }`}
                    >
                      <samp>{item.AQI}</samp>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitysPage;
