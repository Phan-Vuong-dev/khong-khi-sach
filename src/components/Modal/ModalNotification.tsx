import type { ModalNotification } from "../../types";

const ModalNotification: React.FC<ModalNotification> = ({
  onClose,
  title,
  message,
  confirmText,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-3">
      <div className="bg-white rounded-lg shadow-lg w-full p-[20px] max-w-[401px] flex flex-col gap-[16px]">
        <h2 className="text-lg font-semibold text-center text-black">
          {title}
        </h2>
        <p className="text-lg font-normal text-black text-center">{message}</p>
        <div className="flex justify-between">
          <button
            className="bg-white text-black py-[15px] px-[13px] rounded-md hover:bg-gray-400 w-[45%] border-1-D9D9D9 text-lg font-medium"
            onClick={onClose}
          >
            Hủy bỏ
          </button>
          <button className="bg-blue-500 text-white py-[15px] px-[13px] rounded-md hover:bg-blue-600 w-[45%] text-lg font-medium">
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNotification;
