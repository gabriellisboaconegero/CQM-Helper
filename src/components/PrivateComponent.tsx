import React from "react";
import { useAuth } from "../hooks/useAuth";

export const PrivateComponent: React.FC = ({children}) => {

  const {user} = useAuth();

  return user? <>{children}</>: <></>;
}