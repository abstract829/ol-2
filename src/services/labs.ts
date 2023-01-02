import api from "utils/axios";

import { LabAPIResponse } from "interfaces/LabApiResponse.interface";
import { LabsAPIResponse } from "interfaces/LabsApiResponse.interface";

export interface SearchLabsInterface {
  category?: string;
  keywords?: string;
  total?: number;
}

export const fetchLabs = async ({
  category = "",
  keywords = "",
  total = 10,
}: SearchLabsInterface): Promise<any> => {
  let url = "";
  if (category && keywords) {
    url = `/labs/search/?category=${category}&keywords=${keywords}&max_results=${total}`;
  } else if (category) {
    url = `/labs/search/?category=${category}&max_results=${total}`;
  } else if (keywords) {
    url = `/labs/search/?keywords=${keywords}&max_results=${total}`;
  } else {
    url = `/labs/search/?max_results=${total}`;
  }
  const { data } = await api.get<LabsAPIResponse>(url);
  return data;
};

export const fetchLab = async ({
  id,
}: {
  id: string | string[];
}): Promise<LabAPIResponse> => {
  const { data } = await api.get(`/labs/${id}`);
  return data;
};

export const fetchLabCategories = async (): Promise<any> => {
  const { data } = await api.get("/labs/categories");
  return data;
};
