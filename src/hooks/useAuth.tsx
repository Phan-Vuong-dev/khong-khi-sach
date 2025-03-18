import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { loginUser, logoutUser, registerUser } from "../store/slices/authSlice";
import { LoginRequest, RegisterRequest, UserProfile } from "../types";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, token, isAuthenticated, loading, error } = useAppSelector(
    (state) => state.auth
  );

  const login = useCallback(
    (credentials: LoginRequest) => {
      return dispatch(loginUser(credentials)).unwrap();
    },
    [dispatch]
  );

  const register = useCallback(
    (userData: RegisterRequest) => {
      return dispatch(registerUser(userData)).unwrap();
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const getUserRole = useCallback((): number | null => {
    return user?.roleId || null;
  }, [user]);

  const getFullName = useCallback((): string | null => {
    return user?.fullName || null;
  }, [user]);

  return {
    user: user as UserProfile | null,
    token,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout,
    getUserRole,
    getFullName,
  };
};
