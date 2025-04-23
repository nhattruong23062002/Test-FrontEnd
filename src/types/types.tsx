import { IconType } from "react-icons";

export interface ButtonProps {
  text: string;
  icon?: IconType;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface UserCredentials {
  email: string;
  password: string;
}


export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  opportunity: string;
  responsible: string;
  labels: string[];
  type: string;
  avatar?: string;
}
