import { useNavigate } from "react-router-dom";

import ButtonContainer from "./Home.styled";

const Home = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate("dog");
  };

  return (
    <ButtonContainer type="button" onClick={onClickBtn}>
      강아지 보러 가기
    </ButtonContainer>
  );
};

export default Home;
