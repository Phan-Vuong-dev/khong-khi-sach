import { Route, Routes } from "react-router-dom";

// Page
import Layout from "../layouts/Layout";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import ForgotPasswordPage from "../page/ForgotPasswordPage";
import NewPage from "../page/New/NewPage";
import CitysPage from "../page/citys/CitysPage";
import ChangePasswordPage from "../page/profile/ChangePasswordPage";
import ProfilePage from "./../page/profile/ProfilePage";
import EditProfilePage from "../page/profile/EditProfilePage";
import FilesPage from "../page/file/FilesPage";
import PolicyTerms from "../page/PolicyTerms";
import NewDetailPage from "../page/New/NewDetailPage";
import ReconfirmPassword from "../page/profile/ReconfirmPassword";

const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewPage />} />
          <Route path="citys" element={<CitysPage />} />

          <Route path="files" element={<FilesPage />} />
          <Route path="news" element={<NewPage />} />
          <Route path="profiles" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reconfirm-password" element={<ReconfirmPassword />} />
        <Route path="/profile-edit" element={<EditProfilePage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/policy-terms" element={<PolicyTerms />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/news/:id" element={<NewDetailPage />} />
      </Routes>
    </>
  );
};
export default RoutePage;
