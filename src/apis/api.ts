import { httpClient } from "./httpClient";

export const getCarList = async () => {
  const apiUrl = `cat`;
  const { data } = await httpClient.get(apiUrl);

  return data;
};
