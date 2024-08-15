import React from "react";

import { dog } from "../../types/dog";
import ImageContainer from "./DogItem.styled";

type DogItemProps = {
  dog: dog;
  onClickBtn: (dog: dog) => void;
};

const DogItem = ({ dog, onClickBtn }: DogItemProps) => {
  return (
    <div key={dog.dogId} className="card border-secondary mb-3">
      <ImageContainer
        src={dog.imgSrc}
        alt="thumbnail"
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-title">{dog.name}</h2>
        <div className="card-text">
          <p>몸무게: {dog.size}kg</p>
          <p className="information">성격: {dog.tags.join(", ")}</p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            onClickBtn(dog);
          }}
        >
          {dog.name}의 전달하고 싶은 말은?
        </button>
      </div>
    </div>
  );
};

export default DogItem;
