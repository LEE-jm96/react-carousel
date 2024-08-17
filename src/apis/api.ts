import { httpClient } from "./httpClient";

import { dog } from "../types/dog";

export const getDogRandomImg = async () => {
  const apiUrl = "/dog";
  const { data } = await httpClient.get<dog>(apiUrl);

  return data;
};
