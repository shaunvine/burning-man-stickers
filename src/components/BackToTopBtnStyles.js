import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: #fb9101;
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  @media (min-width: 1025px) {
    position: fixed;
    width: 100%;
    left: 92%;
    bottom: 50px;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: #fb9101;
  }

  @media (max-width: 1024px) {
    position: fixed;
    width: 100%;
    left: 10%;
    bottom: 40px;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: #fb9101;
  }
`;
