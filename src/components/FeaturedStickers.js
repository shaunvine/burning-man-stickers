import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Sticker";
const FeaturedStickers = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Stickers</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(0, 6).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/stickers" className="btn">
        all stickers
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 576px) {
    .featured {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gird-auto-rows: 200px;
      grid-auto-flow: dense;
      grid-gap: 10px;
    }
    .sc-bdfBwQ {
      border: 2px #fff;
      border-style: dotted;
    }

    .cMJqHs img {
      padding: 0.5rem;
    }

    .sc-bdfBwQ:nth-child(1) {
      grid-column: span 1;
      grid-row: span 1;
    }
    .sc-bdfBwQ:nth-child(2) {
      grid-column: span 2;
      grid-row: span 2;
    }
    .sc-bdfBwQ:nth-child(3) {
      grid-column: span 2;
      grid-row: span 2;
    }
    .sc-bdfBwQ:nth-child(4) {
      grid-column: span 1;
      grid-row: span 2;
    }
    .sc-bdfBwQ:nth-child(5) {
      grid-row: span 2;
    }
    .sc-bdfBwQ:nth-child(6) {
      grid-column: span 2;
      grid-row: span 3;
    }
  }

  .title {
    margin: 2rem;
  }

  // .featured {
  //   margin: 4rem auto;
  //   display: grid;
  //   grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  //   gap: 2.5rem;
  //   img {
  //     height: 225px;
  //   }
  // }
  .btn {
    display: block;
    width: 148px;
    margin: 2rem auto;
    text-align: center;
  }
  // @media (min-width: 576px) {
  //   .featured {
  //     grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  //   }
  // }
`;

export default FeaturedStickers;
