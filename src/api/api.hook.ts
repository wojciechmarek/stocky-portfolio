import { useContext } from "react";
import { ApiContext } from "./api.context";

export const useApi = () => {
  const context = useContext(ApiContext);
  if (context === null) {
    throw new Error("useApi must be used within the registered ApiContext");
  }
  return context;
};
