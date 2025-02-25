import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContextType {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);