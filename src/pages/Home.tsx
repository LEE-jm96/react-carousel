import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate("dog");
  };
  return (
    <button type="button" onClick={onClickBtn}>
      강아지 보러 가기
    </button>
  );
};

export default Home;
