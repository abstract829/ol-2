import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchGetWorkSpace,
  fetchInstallLabInWorkspace,
} from "services/workspaces";

export const key = "workspaces";

export const useQueryWorkspace = (
  getAccessTokenSilently: () => Promise<String>,
  hasWorkspace: boolean
) => {
  return useQuery([key], () => fetchGetWorkSpace(getAccessTokenSilently), {
    refetchInterval: 5000,
    enabled: !hasWorkspace,
  });
};

export const useInstallLabInWorkspace = () => {
  return useMutation(fetchInstallLabInWorkspace);
};
