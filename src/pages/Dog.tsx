import React from "react";

import Loading from "../components/Loadng/Loading";
import DogCarousel from "../components/DogCarousel/DogCarousel";

import { useDogList } from "../hooks/useDogList";

const Dog = () => {
  const { data: dogList, isLoading } = useDogList();

  return (
    <>
      {isLoading && <Loading />}
      <DogCarousel dogList={dogList} />
    </>
  );
};

export default Dog;
