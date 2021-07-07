import { useContext } from "react"
import { clientContext } from "../contexts/ClientContex"


export const useClient = () => {
  return useContext(clientContext);
}