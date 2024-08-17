import { useState, FormEvent, ChangeEvent } from "react";

import DogCarousel from "../components/DogCarousel/DogCarousel";

import { useDogList } from "../hooks/useDogList";

import { InputContainer, ButtonContainer } from "./Dog.styled";

const Dog = () => {
  const {
    data: allDogList,
    searchData: dogList,
    setSearchData: setDogList,
  } = useDogList();
  const [dogName, setDogName] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (dogName === "") {
      setDogList(allDogList);
      return;
    }

    const filterDog = allDogList.filter((dog) => dog.name === dogName);

    if (filterDog.length === 0) {
      setDogName("");
      window.alert("검색한 강아지는 존재하지 않습니다.");
      return;
    }

    setDogList(filterDog);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDogName(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dogName">이름</label>
        <InputContainer
          type="text"
          id="dogName"
          className="dogName"
          placeholder="찾고 싶은 강아지의 이름을 입력하세요"
          value={dogName}
          onChange={handleChange}
        />
        <ButtonContainer type="submit" className="btn btn-primary">
          검색
        </ButtonContainer>
      </form>
      <br />
      <DogCarousel dogList={dogList} />
    </>
  );
};

export default Dog;
