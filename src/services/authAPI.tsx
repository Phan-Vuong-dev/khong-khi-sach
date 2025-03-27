import axios from "axios";
import { configURL } from "./configAPI";

export const loginAPI = async (credentials: {
  Username: string;
  Password: string;
}) => {
  const response = await axios.post(
    `${configURL}account/api/login`,
    credentials
  );

  if (response.data.status === "200" && response.data.resources) {
    localStorage.setItem("accessToken", response.data.resources.accessToken);
    localStorage.setItem(
      "profile",
      JSON.stringify(response.data.resources.profile)
    );
  }

  return response.data;
};

export const registerAPI = async (userData: any) => {
  const response = await axios.post(
    `${configURL}account/api/register`,
    userData
  );
  return response.data;
};

export const logoutAPI = async () => {
  try {
    const response = await axios.post(`${configURL}account/api/logout`);
    if (response.status === 200) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("profile");
    }
    return response.data;
  } catch (error) {
    console.error("Logout API failed:", error);
    throw new Error("Logout failed. Please try again.");
  }
};

export const changePasswordAPI = async (
  passwordData: {
    oldPassword: string;
    newPassword: string;
  },
  token: string
) => {
  const response = await axios.post(
    `${configURL}account/api/reset-password`,
    passwordData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const forgotPasswordAPI = async (email: string) => {
  const response = await axios.post(
    `${configURL}account/api/forgot-password?value=${email}`
  );
  return response.data;
};

export const getProfileAPI = async (token: string) => {
  const response = await axios.get(`${configURL}account/api/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateAvatarAPI = async (file: File, token: string) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    `${configURL}account/api/update-avatar`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const updateProfileAPI = async (data: any, token: string) => {
  const response = await axios.post(
    "https://clean-air.dion.vn/account/api/update-profile",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const verifyChangePasswordAPI = async (passwordData: {
  code: string;
  password: string;
  confirmPassword: string;
}) => {
  const response = await axios.post(
    `${configURL}account/api/verify-change-password`,
    passwordData
  );
  return response.data;
};
