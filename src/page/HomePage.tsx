import { useState } from "react";
import Img from "../assets/img";
import HeaderPage from "../components/HeaderPage";
import Slider from "react-slick";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Thứ 7");

  const tabs = [
    "Thứ 7",
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
  ];
  const weatherData = {
    "Thứ 7": [
      {
        time: "08:00",
        range: "100-150",
        temp: 11,
        humidity: 33,
        wind: 11.7,
      },
      {
        time: "08:00",
        range: "150-200",
        temp: 11,
        humidity: 33,
        wind: 11.7,
      },
      {
        time: "08:00",
        range: "200-250",
        temp: 11,
        humidity: 33,
        wind: 11.7,
      },
      {
        time: "08:00",
        range: "250-300",
        temp: 11,
        humidity: 33,
        wind: 11.7,
      },
    ],
    "Chủ nhật": [
      {
        time: "08:00",
        range: "150-200",
        color: "bg-orange-500",
        temp: 11,
        humidity: 33,
        wind: 11.7,
      },
    ],
    "Thứ 2": [
      {
        time: "08:00",
        range: "200-250",
        color: "bg-purple-500",
        temp: 11,
        humidity: 33,
        wind: 11.7,
      },
    ],
    "Thứ 3": [
      {
        time: "08:00",
        range: "250-300",
        color: "bg-red-500",
        temp: 11,
        humidity: 33,
        wind: 11.7,
      },
    ],
    "Thứ 4": [
      {
        time: "08:00",
        range: "250-300",
        color: "bg-red-500",
        temp: 11,
        humidity: 33,
        wind: 11.7,
      },
    ],
    "Thứ 5": [
      {
        time: "08:00",
        range: "250-300",
        color: "bg-red-500",
        temp: 11,
        humidity: 33,
        wind: 11.7,
      },
    ],
    "Thứ 6": [
      {
        time: "08:00",
        range: "250-300",
        color: "bg-red-500",
        temp: 11,
        humidity: 33,
        wind: 11.7,
      },
    ],
    // Add more data for other days if needed
  };

  const getBackgroundColor = (range: any) => {
    switch (range) {
      case "100-150":
        return "#03A020";
      case "150-200":
        return "#D96500";
      case "200-250":
        return "#9E54FF";
      case "250-300":
        return "#FF171B";
      default:
        return "#FFFFFF";
    }
  };

  // Settings for tabs slider
  const tabSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 3.3,
    focusOnSelect: true,
  };

  // Settings for weather data slider
  const weatherSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-md mx-auto bg-white w-full">
      <HeaderPage />
      <div className="min-h-screen pt-[148px] pb-[90px] bg-home px-[10px] flex flex-col items-center gap-5">
        <div className="top_main_home_banner">
          <div className="title_city relative">
            <h2>Hà Nội</h2>
            <div onClick={() => alert("Hello")}>
              <img src={Img.editTitleCity} alt="" />
            </div>
          </div>
          <h3 className="type text-white text-base font-semibold">
            Trung bình
          </h3>
          <div className="number_index flex flex-row items-end gap-1">
            <h4 className=" text-white text-[62px] font-normal">150</h4>
            <h5 className=" text-white text-[24px]/[75px] font-normal">AQI</h5>
          </div>
          <div className="number_status">
            <p>Ô nhiễm chính: PM2.5</p>
            <p>35  µg/m³</p>
          </div>
          <div className="number_status_detail">
            <div className="temperature">
              <img src={Img.temperatureIcon} alt="" />
              <p>Nhiệt độ: 11°</p>
            </div>
            <div className="wind_speed">
              <img src={Img.windSpeedIcon} alt="" />
              <p>9.0 km/h</p>
            </div>
            <div className="humidity">
              <img src={Img.humidityIcon} alt="" />
              <p>66%</p>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-lg text-shadow-home text-white">
          Dự báo 7 ngày tiếp theo
        </h2>
        <div className="main_home_tabs w-full overflow-hidden">
          {/* Tabs */}
          <Slider {...tabSliderSettings} className="tabs_home w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`button_tab ${
                  activeTab === tab
                    ? "active_button border-white font-bold"
                    : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </Slider>

          {/* Weather Information */}
          <div className="mt-4 grid grid-cols-1 gap-4">
            <Slider {...weatherSliderSettings} className="w-full weatherData">
              {Array.isArray(weatherData[activeTab]) &&
                weatherData[activeTab].map((data, index) => (
                  <div
                    key={index}
                    className="py-5 px-[10px] rounded-lg shadow-md card-items text-white"
                  >
                    <p className="text-center text-lg">{data.time}</p>
                    <p
                      className="mt-2 text-center py-1 rounded-md font-bold"
                      style={{
                        backgroundColor: getBackgroundColor(data.range),
                      }}
                    >
                      {data.range}
                    </p>
                    <div className="flex flex-col items-center justify-center mt-2 text-sm gap-2">
                      <div className="flex flex-col items-center justify-center">
                        <img src={Img.temperatureIcon} alt="" />
                        <div className="flex flex-col items-center justify-center">
                          <p>Nhiệt độ:</p>
                          <p>{data.temp}°</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center">
                        <img src={Img.humidityIcon} alt="" />
                        <div className="flex flex-row gap-1">
                          <p>Độ ẩm:</p>
                          <p>{data.humidity}%</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center">
                        <img src={Img.windSpeedIcon} alt="" />
                        <div className="flex flex-col items-center justify-center">
                          <p>Tốc độ gió:</p>
                          <p>{data.wind} km/h</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        <div className="main_home_girl_title">
          <h2 className="font-bold text-lg text-shadow-home text-white text-center">
            Chất gây ô nhiễm không khí
          </h2>
          <p className="font-normal text-base text-shadow-home text-white text-center">
            Chất lượng không khí hiện tại ở Hà Nội ra sao?
          </p>
        </div>
        <div className="main_home_girl grid grid-cols-2 gap-2">
          <div className="bg-home-card">
            <div className="bg-home-card_top flex flex-col gap-1 justify-start">
              <h6 className="text-white text-lg font-bold">PM2.5</h6>
              <p className="text-white text-sm">
                Chất dạng hạt có đường kính &lt; 2,5 micromet
              </p>
            </div>
            <div className="bg-home-card_bot flex flex-row gap-1 items-center justify-start">
              <img src={Img.cardBotIcon} alt="" />
              <div className="text-content flex flex-row items-end gap-1">
                <h5 className="text-4xl text-white">35</h5>
                <p className="text-base/[30px] text-white">µg/m³</p>
              </div>
            </div>
          </div>
          <div className="bg-home-card">
            <div className="bg-home-card_top flex flex-col gap-1 justify-start">
              <h6 className="text-white text-lg font-bold">PM10</h6>
              <p className="text-white text-sm">
                Chất dạng hạt dưới 10 micromet
              </p>
            </div>
            <div className="bg-home-card_bot flex flex-row gap-1 items-center justify-start">
              <img src={Img.cardBotIcon} alt="" />
              <div className="text-content flex flex-row items-end gap-1">
                <h5 className="text-4xl text-white">65.9</h5>
                <p className="text-base/[30px] text-white">µg/m³</p>
              </div>
            </div>
          </div>
          <div className="bg-home-card">
            <div className="bg-home-card_top flex flex-col gap-1 justify-start">
              <h6 className="text-white text-lg font-bold">O₃</h6>
              <p className="text-white text-sm">Ozone</p>
            </div>
            <div className="bg-home-card_bot flex flex-row gap-1 items-center justify-start">
              <img src={Img.cardBotIcon} alt="" />
              <div className="text-content flex flex-row items-end gap-1">
                <h5 className="text-4xl text-white">11.6</h5>
                <p className="text-base/[30px] text-white">µg/m³</p>
              </div>
            </div>
          </div>
          <div className="bg-home-card">
            <div className="bg-home-card_top flex flex-col gap-1 justify-start">
              <h6 className="text-white text-lg font-bold">NO₂</h6>
              <p className="text-white text-sm">Nitơ đioxit</p>
            </div>
            <div className="bg-home-card_bot flex flex-row gap-1 items-center justify-start">
              <img src={Img.cardBotIcon} alt="" />
              <div className="text-content flex flex-row items-end gap-1">
                <h5 className="text-4xl text-white">171</h5>
                <p className="text-base/[30px] text-white">µg/m³</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main_home_notification">
          <img src={Img.iconHomeNotification} alt="" />
          <p className="font-normal text-base text-shadow-home text-black">
            Nồng độ PM2.5 hiện tại là 7 lần giá trị hướng dẫn hàng năm về PM2.5
            của WHO.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
