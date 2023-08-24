import styled from "styled-components";

import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineEye,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

export const MainContainer = styled.div`
  display: flex;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 30vw;
  flex-direction: column;
  background-color: #f2f1ed;
  padding: 10px;
  @media screen and(min-width: 768px) {
    padding: 40px;
  }
`;

export const MainHeading = styled.h1`
  font-family: Ruwudu;
  display: flex;
  font-size: 18px;
  font-weight: 200;
  color: #30302e;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const LikeShareViewContainer = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 180px;
  }
`;

export const IconAndCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  background-color: #d9d7d2;
  height: 30px;
  width: 30px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 30px;
    width: 30px;
    border-radius: 40px;
  }
`;

export const HeartIcon = styled(AiOutlineHeart)`
  display: flex;
  height: 15px;
  width: 15px;
  color: #30302e;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const ShareIcon = styled(AiOutlineShareAlt)`
  display: flex;
  height: 15px;
  width: 15px;
  color: #30302e;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const ViewIcon = styled(AiOutlineEye)`
  display: flex;
  height: 15px;
  width: 15px;
  color: #30302e;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const CountText = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #30302e;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const KeyValueContainer = styled.div``;

export const KeyValuePair = styled.p`
  color: #939696;
  font-weight: 700;
  font-size: 12px;
  margin: 7px;
  margin-left: 0px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;

export const DescriptionHeading = styled.h1`
  font-size: 14px;
  color: #30302e;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DescriptionText = styled.p`
  color: #939696;
  font-weight: 700;
  font-size: 12px;
  margin: 7px;
  margin-left: 0px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;

export const ReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RightArrowIcon = styled(AiOutlineArrowRight)`
  color: #ab6533;
`;

export const ReadMoreText = styled.h1`
  font-family: "Roboto";
  font-size: 14px;
  color: #ab6533;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;

export const BrownButton = styled.button`
  background-color: #ab6533;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: 200;
  font-size: 6px;
  height: 20px;
  width: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 150px;
    font-size: 8px;
    font-weight: 800;
    margin-right: 10px;
  }
`;

export const TransparentButton = styled.button`
  background-color: #ffffff;
  color: #ab6533;
  padding: 10px;
  border: 1px solid #ab6533;
  border-radius: 5px;
  font-weight: 800;
  font-size: 6px;
  height: 20px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 70px;
    font-size: 8px;
  }
`;

export const ImageDisplayContainer = styled.div`
  background-image: url("https://res.cloudinary.com/my-cloud123/image/upload/v1692708641/img2_dxpnsi.jpg");
  background-size: cover;
  width: ${(props) => (props.displayDesc ? "100vw" : "70vw")};
  height: 100vh;
  display: grid;

  @media screen and (min-width: 768px) {
    height: none;
  }
`;

export const StatueImage = styled.img`
  height: 400px;
  width: 400px;
  justify-self: center;
`;

export const ArrowButton = styled.button`
  height: 30px;
  width: 40px;
  justify-content: flex-start;
  align-self: flex-start;
  margin-top: 50px;
  background-color: #d9d7d2;
  border: 2px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
`;

export const LeftArrowIcon = styled(HiOutlineChevronDoubleLeft)`
  color: #ab6533;
  height: 20px;
  width: 20px;
`;
