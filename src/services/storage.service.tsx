import { UserProfile } from "../types";

const STORAGE_KEYS = {
  AUTH_TOKEN: "accessToken",
  USER_PROFILE: "userProfile",
};

export const storageService = {
  // Auth Token
  getToken: (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  setToken: (token: string): void => {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  removeToken: (): void => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  // User Profile
  getUserProfile: (): UserProfile | null => {
    const profile = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return profile ? JSON.parse(profile) : null;
  },

  setUserProfile: (profile: UserProfile): void => {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  },

  removeUserProfile: (): void => {
    localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
  },

  // Clear all auth data
  clearAuthData: (): void => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
  },
};
