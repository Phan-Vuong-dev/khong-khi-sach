export interface HeaderDetailPageProps {
  titlePage: string;
}

export interface ModalNotification {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  onConfirm: () => void;
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
export interface Profile {
  id: number;
  roleId: number;
  fullName: string;
  photo: string;
  username: string;
  email: string;
}

export interface AuthState {
  user: Profile | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}

export interface RegisterData {
  FullName: string;
  AddressDetail: string;
  Dob: string;
  Email: string;
  Username: string;
  Password: string;
  Photo: string;
  Phone: string;
}

export interface LoginCredentials {
  FullName: string;
  AddressDetail: string;
  Dob: string;
  Email: string;
  Username: string;
  Password: string;
  Photo: string;
  Phone: string;
}
