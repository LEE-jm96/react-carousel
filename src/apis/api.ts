import { httpClient } from "./httpClient";

export const getDogRandomImg = async () => {
  const apiUrl = "/dog";
  const { data } = await httpClient.get(apiUrl);

  return data;
};
