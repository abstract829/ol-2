import { WorkspaceDataAPIResponse } from "interfaces/WorkspaceDataApiResponse.interface";
import api from "utils/axios";

export const fetchGetWorkSpace = async (
  getAccessTokenSilently: () => Promise<String>
): Promise<any> => {
  const token = await getAccessTokenSilently();

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const { data } = await api.get(`/workspaces/lab`);
  return data;
};

interface installProps {
  id?: string;
  getAccessTokenSilently?: () => Promise<String>;
}
export const fetchInstallLabInWorkspace = async ({
  id,
  getAccessTokenSilently,
}: installProps): Promise<any> => {
  const token = await getAccessTokenSilently();
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const { data } = await api.post(`/workspaces/lab/${id}`);
  return data;
};
