import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import type { dog } from "../types/dog";

const DOG_TEMP_DATA = [
  {
    tags: ["활발함", "귀여움"],
    name: "초코",
    size: 7,
    imgSrc: "../../public/dog1.jpeg",
    dogId: 3,
  },
  {
    tags: ["얌전함", "애교 있음"],
    name: "토토",
    size: 8,
    imgSrc: "../../public/dog2.jpeg",
    dogId: 7,
  },
  {
    tags: ["수줍어함", "장난을 좋아함"],
    name: "콩이",
    size: 6,
    imgSrc: "../../public/dog3.jpeg",
    dogId: 1,
  },
  {
    tags: ["팔다리가 김", "낯가림이 심함"],
    name: "단추",
    size: 4,
    imgSrc: "../../public/dog4.jpeg",
    dogId: 2,
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
