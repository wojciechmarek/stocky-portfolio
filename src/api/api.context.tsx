import { createContext } from "react";
import { ApiType } from "./api.type";

export const ApiContext = createContext<ApiType | null>(null);
