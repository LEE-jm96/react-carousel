import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DogItem from "../DogItem/DogItem";
import DogToast from "../DogToast/DogToast";

import { dog } from "../../types/dog";

type DogListPropsTypes = {
  dogList: dog[];
};

const DogCarousel = ({ dogList }: DogListPropsTypes) => {
  const [selectedDog, setSelectedDog] = useState<dog>(dogList[0]);
  const [isOpenToast, setIsOpenToast] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const onClickBtn = (dog: dog): void => {
    setSelectedDog(dog);
    setIsOpenToast(true);
  };

  const closeToast = () => {
    setIsOpenToast(false);
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {dogList.map((dog) => {
          return (
            <div key={dog.dogId} className="card">
              <DogItem dog={dog} onClickBtn={onClickBtn} />
            </div>
          );
        })}
      </Slider>
      {isOpenToast && (
        <DogToast selectedDog={selectedDog} closeToast={closeToast} />
      )}
    </div>
  );
};

export default DogCarousel;
