import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dog } from "../../types/dog";
import CarouselContainer from "../DogCarousel/DogCarousel.styled";

type DogListProps = {
  dogList: dog[];
};

const DogCarousel = ({ dogList }: DogListProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
  };

  return (
    <>
      <h1>DogList</h1>
      <div className="carousel">
        <Slider {...settings}>
          {dogList.map((dog, idx) => {
            return (
              <CarouselContainer key={dog.dogId}>
                <img src={dog.imgSrc} alt="thumbnail" className="thumbnail" />
                <div className="contents">
                  <h2>{dog.name}</h2>
                  <p>몸무게: {dog.size}kg</p>
                  <p className="information">성격: {dog.tags.join(", ")}</p>
                </div>
              </CarouselContainer>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default DogCarousel;
