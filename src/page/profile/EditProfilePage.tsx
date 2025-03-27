import { useEffect, useState } from "react";
import Img from "../../assets/img";
import HeaderDetailPage from "../../components/HeaderDetailPage";
import ModalNotification from "../../components/Modal/ModalNotification";
import { toast } from "react-toastify";
import { useSelector } from "../../store/store";
import { updateAvatarAPI, updateProfileAPI } from "./../../services/authAPI";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const { accessToken, user } = useSelector((state: any) => state.auth);

  const userAvatar = user?.photo || null;

  console.log(avatarPreview);

  // Lấy dữ liệu cũ từ Redux store và đặt vào formData
  useEffect(() => {
    if (user) {
      setFormData({
        FullName: user.fullName || "",
        Email: user.email || "",
        Phone: user.phone || "",
        Address: user.addressDetail || "",
      });
    }
  }, [user]);

  const handleUpdate = async () => {
    // Validate inputs
    if (!formData.FullName || !formData.Email) {
      toast.error("Vui lòng điền đầy đủ thông tin bắt buộc.");
      return;
    }

    // Chuẩn bị dữ liệu gửi đến API
    const updateData = {
      fullName: formData.FullName,
      email: formData.Email,
      phone: formData.Phone,
      address: formData.Address,
    };

    try {
      // Gọi API cập nhật thông tin tài khoản
      if (accessToken) {
        await updateProfileAPI(updateData, accessToken);

        toast.success("Cập nhật thông tin thành công!");

        navigate("/profiles");
      } else {
        toast.error("Bạn cần đăng nhập để thực hiện thao tác này.");
      }
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error("Cập nhật thông tin thất bại.");
    }

    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full h-screen max-w-md mx-auto bg-white">
      <HeaderDetailPage titlePage="Chỉnh sửa thông tin cá nhân" />
      <div className="flex flex-col gap-2 h-screen pt-[150px] pb-5 px-5">
        {/* Avatar Update Section */}
        <div className="avatar flex flex-row items-end gap-[14px] mb-4">
          <img
            src={
              `https://clean-air.dion.vn/${userAvatar}` ||
              (userAvatar
                ? `https://clean-air.dion.vn/${userAvatar}`
                : Img.DefaultAvatar)
            } // Hiển thị ảnh preview, ảnh hiện tại hoặc ảnh mặc định
            alt="Avatar"
            className="object-cover w-[120px] h-[120px] rounded-full"
          />
          <input
            id="avatarInput"
            type="file"
            accept="image/*"
            onChange={async (e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                setAvatarFile(file);
                setAvatarPreview(URL.createObjectURL(file));

                // Gọi API cập nhật ảnh ngay sau khi chọn
                if (accessToken) {
                  try {
                    await updateAvatarAPI(file, accessToken);
                    toast.success("Cập nhật ảnh đại diện thành công!");
                    navigate("/profiles");
                  } catch (error) {
                    console.error("Avatar upload error:", error);
                    toast.error("Cập nhật ảnh đại diện thất bại.");
                  }
                } else {
                  toast.error("Bạn cần đăng nhập để thực hiện thao tác này.");
                }
              } else {
                toast.error("Vui lòng chọn một ảnh hợp lệ.");
              }
            }}
            className="hidden"
          />
          <button
            className="px-5 py-3 text-white rounded-lg hover:bg-blue-600 hover:text-white"
            onClick={() => document.getElementById("avatarInput")?.click()}
          >
            {avatarFile ? "Cập nhật ảnh" : "Tải ảnh lên"}
          </button>
        </div>

        {/* Profile Update Section */}
        <form
          method="POST"
          action="/profile-edit"
          className="relative z-0 w-full flex flex-col gap-[16px]"
        >
          <div className="flex flex-col">
            <label htmlFor="FullName" className="title-login">
              Tên của bạn <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="FullName"
              name="FullName"
              placeholder="Nhập tên của bạn"
              className="w-full px-3 py-2 text-base border rounded-md"
              value={formData.FullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Email" className="title-login">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Nhập email"
              className="w-full px-3 py-2 text-base border rounded-md"
              value={formData.Email}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Phone" className="title-login">
              Số điện thoại
            </label>
            <input
              type="text"
              id="Phone"
              name="Phone"
              placeholder="Nhập số điện thoại"
              className="w-full px-3 py-2 text-base border rounded-md"
              value={formData.Phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Address" className="title-login">
              Số địa chỉ
            </label>
            <input
              type="text"
              id="Address"
              name="Address"
              placeholder="Nhập số địa chỉ"
              className="w-full px-3 py-2 text-base border rounded-md"
              value={formData.Address}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center justify-center w-full">
            <button
              type="button"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={handleOpenModal}
            >
              Lưu lại
            </button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <ModalNotification
          isOpen={isModalOpen}
          onClose={handleClose}
          title="Xác nhận lưu thông tin"
          message="Bạn có chắc chắn muốn lưu thông tin cập nhật không?"
          confirmText="Đồng ý"
          onConfirm={handleUpdate}
        />
      )}
    </div>
  );
};

export default EditProfilePage;
