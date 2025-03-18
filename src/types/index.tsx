export interface HeaderDetailPageProps {
  titlePage: string;
}

export interface ModalNotification {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
}

export interface CardNewProps {
  indexPost: number;
  imgPost: string;
  titlePost: string;
  timeDate: string;
  idPost: number;
}

export interface PostDetail {
  id: number;
  headline: string;
  date: string;
  link: string;
  image: string;
  content: string;
}

// auth types
export interface LoginRequest {
  Username: string;
  Password: string;
}

export interface UserProfile {
  id: number;
  roleId: number;
  roleName: string | null;
  roleColor: string | null;
  fullName: string;
  photo: string;
  username: string;
  email: string;
  warehouseId: number | null;
  displayName: string | null;
}

export interface LoginResponse {
  status: string;
  message: string;
  value: any;
  data: any;
  resources: {
    accessToken: string;
    profile: UserProfile;
  };
  title: string | null;
  errors: any | null;
}

export interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface RegisterRequest {
  fullName: string;
  addressDetail: string;
  dob: string;
  email: string;
  username: string;
  password: string;
  photo: string;
  phone: string;
}

export interface RegisterRequest {
  fullName: string;
  addressDetail: string;
  dob: string;
  email: string;
  username: string;
  password: string;
  photo: string;
  phone: string;
}

export interface RegisterResponse {
  status: string;
  message: string;
  data: Array<{
    id: number;
    username: string;
    fullName: string;
    email: string;
    phone: string;
    photo: string;
    doB: string;
    addressDetail: string;
    active: boolean;
    roleId: number;
    createdTime: string;
  }>;
}
