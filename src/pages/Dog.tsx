import React from "react";

import Loading from "../components/Loadng/Loading";
import DogCarousel from "../components/DogCarousel/DogCarousel";

import { useDogList } from "../hooks/useDogList";

const Dog = () => {
  const { data: dogList, isLoading } = useDogList();

  return (
    <>
      <DogCarousel dogList={dogList} />
      {isLoading && <Loading />}
    </>
  );
};

export default Dog;
