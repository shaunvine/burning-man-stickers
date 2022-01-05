import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="countdown-clock">
          <p>
            <Link to="/">Home</Link>
            {product && <Link to="/stickers">/ Stickers</Link>}/ {title}
          </p>
          {/* <span><CountDown/></span> */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: rgba(53, 46, 49, 0.3);
  width: 100%;
  min-height: 6vh;
  display: flex;
  align-items: center !important;

  .section-center p {
    margin-bottom: 0 !important;
  }

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }

  .underline {
    width: 100%;
    height: 0.125rem;
    background: #49a6e9;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }
`;

export default BreadCrumbs;
