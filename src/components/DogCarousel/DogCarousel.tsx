import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DogItem from "../DogItem/DogItem";
import DogToast from "../Toast/DogToast";

import { dog } from "../../types/dog";

type DogListProps = {
  dogList: dog[];
};

const DogCarousel = ({ dogList }: DogListProps) => {
  const [selectedDog, setSelectedDog] = useState<dog>();
  const [isOpenToast, setIsOpenToast] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    arrows: false,
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
