import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Product = ({
  url,
  name,
  themecampname,
  createdby,
  contributor,
  desc,
  camplink,
  year,
  id,
  slug,
}) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={url} alt={name} />
        <Link to={`/stickers/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>
          <Link to={`/stickers/${id}`}>{name}</Link>
        </h5>
        <p>{year}</p>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .container {
    position: relative;
    // background: var(--clr-black);
    border-radius: var(--radius);
    padding: 10px;
    // border: solid #fff 2px;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    // border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  @media only screen and (min-width: 1024px) {
    .container:hover img {
      opacity: 0.5;
    }
    .container:hover .link {
      opacity: 1;
    }
  }

  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.25rem;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
