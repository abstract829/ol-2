import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "services/users";

const key = "user";

export const useQueryUser = (getAccessTokenSilently: () => Promise<String>) => {
  return useQuery([key], () => fetchUser(getAccessTokenSilently));
};


