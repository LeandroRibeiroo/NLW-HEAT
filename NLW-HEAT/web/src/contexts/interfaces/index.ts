import { ReactNode } from "react";

export interface IUser {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

export interface IAuthContextData {
  user: IUser | null;
  signInUrl: string;
  signOut: () => void;
}

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthResponse {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  };
}
