import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { links } from "../utils/constants";
import SocialButtons from "../components/SocialButtons";

const Footer = () => {
  return (
    <Wrapper>
      <div className="article1">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <span key={id}>
              <NavLink to={url}>{text}</NavLink>
            </span>
          );
        })}
      </div>
      <div className="article2">
        <SocialButtons />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.5rem;
  justify-items: center;
  background-color: rgba(53, 46, 49, 0.3);

  .article1 {
    margin-top: 0.75rem;
  }
  .article2 {
    margin-bottom: 0.75rem;
  }

  .article1 a {
    color: #fff;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    margin: 0.5rem 0.5rem;
    padding: 0.25rem 0.25rem;
    &:hover {
      border-bottom: 1px solid #fff;
    }
  }

  .active {
    border-bottom: 1px solid #fff;
    padding-bottom: -1px;
  }
`;

export default Footer;
