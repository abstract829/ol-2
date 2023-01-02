import axios from "axios";
import { UserAPIResponse } from "interfaces/UserApiResponse.interface";
import Auth0Config from "utils/Auth0Config";
import api from "utils/axios";

export const fetchUser = async (
  getAccessTokenSilently: () => Promise<String>
): Promise<UserAPIResponse> => {
  const token = await getAccessTokenSilently();

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const { data } = await api.get("/users/");
  return data;
};

export const fetchResetPassword = async (email: string): Promise<String> => {
  const { data } = await axios.post(
    "https://login.onlylabs.io/dbconnections/change_password",
    {
      client_id: Auth0Config.clientId,
      email,
      connection: "Username-Password-Authentication",
    }
  );
  return data;
};
