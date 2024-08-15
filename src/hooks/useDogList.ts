import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import type { dog } from "../types/dog";

const DOG_TEMP_DATA = [
  {
    tags: ["팔다리가 김", "낯가림이 심함"],
    name: "단추",
    size: 4,
    imgSrc: "../../public/dog1.jpg",
    dogId: 2,
    message: "안녕 나는 단추야 잘 부탁해",
  },
  {
    tags: ["활발함", "귀여움"],
    name: "초코",
    size: 7,
    imgSrc: "../../public/dog2.jpg",
    dogId: 3,
    message: "안녕 나는 초코야 잘 부탁해",
  },
  {
    tags: ["얌전함", "애교 있음"],
    name: "토토",
    size: 8,
    imgSrc: "../../public/dog3.jpg",
    dogId: 7,
    message: "안녕 나는 토토야 잘 부탁해",
  },
];

export function useDogList() {
  const [data, setData] = useState<dog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<Error>();

  useEffect(() => {
    const fetchDogList = async () => {
      try {
        setIsLoading(true);
        //const dogListData = await getDogRandomImg();
        setData(DOG_TEMP_DATA);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof AxiosError) {
          setIsError(error);
        }
      }
    };

    fetchDogList();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
}
