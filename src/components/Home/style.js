import styled from "styled-components";

export const Corpo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;
`;

export const Header = styled.div`
  width: 326px;
  margin: 25px 0 22px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }

  ion-icon {
    width: 30px;
    height: 30px;
    color: #ffffff;
  }
`;

export const Content = styled.div`
  width: 326px;
  height: 67vh;
  background-color: #ffffff;
  margin-bottom: 13px;
  border-radius: 8px;

  p {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }

  span {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

export const Footer = styled.div`
  width: 326px;
  display: flex;
  justify-content: space-between;
`;

export const InsideFooter = styled.div`
  width: 156px;
  height: 114px;
  display: flex;
  background: #a328d6;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-between;
  padding: 11px 0px 10px 10px;

  p {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }

  ion-icon {
    width: 25px;
    height: 25px;
    color: #ffffff;
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }

  h2 {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  h3 {
    font-family: "Raleway";
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #c70000;
  }
`;
