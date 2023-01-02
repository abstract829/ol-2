import { useQuery } from "@tanstack/react-query";
import { LabsAPIResponse } from "interfaces/LabsApiResponse.interface";

import {
  fetchLab,
  fetchLabCategories,
  fetchLabs,
  SearchLabsInterface,
} from "services/labs";

export const key = "labs";

export const useQueryLabs = (data: SearchLabsInterface) => {
  return useQuery<LabsAPIResponse, Error>([key], () => fetchLabs(data), {
    staleTime: Infinity,
  });
};

export const useQueryLab = ({ id }: { id: string | string[] }) => {
  return useQuery([key, id], () => fetchLab({ id }), { staleTime: Infinity });
};

export const useQueryLabCategories = () => {
  return useQuery([key, "categories"], () => fetchLabCategories());
};
