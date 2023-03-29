import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import intro3 from "../../assets/intro3.png";
// import HighLight from "../commons/HighLight";

export default function Intro3() {
  return (
    <ProfilBox>
      <ContentBox>
        <Img>
          <img src={intro3} alt="" />
        </Img>
        <TitleBox>
          <h3>우선권을 구매한</h3>
          <h3>특별한 손님만이 </h3>
          <h3> 이용할 수 있어요</h3>
        </TitleBox>
        <SubTitleBox>
          <h4>NFasT 서비스의 품질을 위해</h4>
          <h4>발행 수의 제한이 있어요</h4>
          <h4>이쯤에서, </h4>
          <h4>수익에 대한 의문이 드시나요?</h4>
        </SubTitleBox>
      </ContentBox>
      <MoreContentIconBox>
        <Link to="/intro4">
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </Link>
      </MoreContentIconBox>
    </ProfilBox>
  );
}
const Img = styled.div`
  img {
    width: 280px;
    height: 300px;
    position: absolute;
    top: 20vw;
    left: 35vw;
    opacity: 80%;
  }
  @media screen and (max-width: 200px) {
    width: 200px;
    height: 250px;
  }
`;
const ProfilBox = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10%;
  justify-content: center;
  position: relative; /* contact box 고정시키기위해서 */
`;

const contentUpAnimation = keyframes`
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 65%;
  display: flex;

  // margin-left: 7%;
  // margin-top: 25%;
  flex-direction: column;

  animation: ${contentUpAnimation} 1s 1 ease-in normal;
  @media screen and (max-width: 682px) {
    height: 60%;
  }
`;

const TitleBox = styled.div`
  font-size: 1.4rem;
  line-height: 1rem;
  position: relative; /* 포지션 설정 */
  z-index: 1;
  animation: ${contentUpAnimation} 0.5s 1 ease-in normal;
  @media screen and (max-width: 200px) {
    font-size: 20px;
    line-height: 10px;
  }
`;
const SubTitleBox = styled.div`
  font-size: 0.9rem;
  line-height: 0.8rem;
  animation: ${contentUpAnimation} 0.8s 1 ease-in normal;
  @media screen and (max-width: 200px) {
    font-size: 18px;
  }
`;
const downIconAnimation = keyframes`
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
      text-shadow: none;
    }
    100% {
      -webkit-transform: translateY(50px);
              transform: translateY(50px);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
    }
`;
const MoreContentIconBox = styled.div`
  animation-duration: 2s;
  animation-delay: 3s;
  animation-name: ${downIconAnimation};
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
