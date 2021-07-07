import { useContext } from "react";
import { authContext } from "../contexts/AuthProvider";

export function useAuth(){
  return useContext(authContext);
}