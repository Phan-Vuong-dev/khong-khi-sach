import { useState } from "react";

const DemoPage = () => {
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

  const getBackgroundColor = (range) => {
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
  return (
    <div className="main_home_tabs w-full overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-white overflow-x-auto w-full tabs_home hover:scrollbar-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-none w-[23%] py-2 text-center text-white font-normal text-lg ${
              activeTab === tab
                ? "active_button border-white font-bold"
                : "opacity-70"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Weather Information */}
      <div className="mt-4 grid grid-cols-1 gap-4">
        {Array.isArray(weatherData[activeTab]) &&
          weatherData[activeTab].map((data, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md"
              style={{ background: getBackgroundColor(data.range) }}
            >
              <p className="text-center text-lg">{data.time}</p>
              <p className="mt-2 text-center py-1 rounded-md font-bold">
                {data.range}
              </p>
              <div className="flex justify-between mt-2 text-sm">
                <div>
                  <p>Nhiệt độ:</p>
                  <p>{data.temp}°</p>
                </div>
                <div>
                  <p>Độ ẩm:</p>
                  <p>{data.humidity}%</p>
                </div>
                <div>
                  <p>Tốc độ gió:</p>
                  <p>{data.wind} km/h</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DemoPage;
