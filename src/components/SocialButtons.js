import React from "react";
import { SocialIcon } from "react-social-icons";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";

const SocialButtons = () => {
  const { closeSidebar } = useProductsContext();
  return (
    <Wrapper className="social-btn-wrapper">
      <div className="social-btn">
        <span className="social-icon">
          <SocialIcon
            bgColor="#fff"
            url="https://facebook.com/Burning-Man-Stickers-498665570321306"
            target="blank"
            style={{ height: 30, width: 30 }}
            onClick={closeSidebar}
          />
        </span>
        <span className="social-icon">
          <SocialIcon
            bgColor="#fff"
            url="https://instagram.com/burning_man_stickers"
            target="blank"
            style={{ height: 30, width: 30 }}
            onClick={closeSidebar}
          />
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  // width: 225px;

  .social-btn {
    display: flex;
    justify-content: center;
    // font-size: 1.5rem;
    flex-direction: row;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    // padding: 10px;
    color: var(--clr-grey-1);
  }

  .social-icon {
    margin: 2px;
  }

  .social-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem; 
    }
  }
  
  }
`;
export default SocialButtons;
