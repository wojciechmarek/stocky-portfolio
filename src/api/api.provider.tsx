import { Account, Client } from "appwrite";
import { ReactNode } from "react";
import { ApiContext } from "./api.context";

export const ApiProvider = (children: ReactNode) => {
  return (
    <ApiContext.Provider value={{ account }}>{children}</ApiContext.Provider>
  );
};

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_API_URL)
  .setProject(import.meta.env.VITE_API_KEY);

export const account = new Account(client);
