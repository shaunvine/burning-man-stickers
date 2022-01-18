import React from "react";
import styled from "styled-components";
import { Filters, StickerList, Sort, PageHero, Hero } from "../components";
import Banner from "../components/Banner";
import App from "../components/BackToTopBtn";

const ProductsPage = () => {
  return (
    <main>
      <Hero hero="stickersHero">
        <Banner title="Jaguara">
          <p className="photo-credit">Photo by: Leori Gill</p>
        </Banner>
      </Hero>
      <PageHero title="Stickers" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <StickerList />
          </div>
        </div>
      </Wrapper>
      <App />
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 1rem auto 4rem;
  }

  @media (max-width: 767px) {
    .products {
      display: grid;
      gap: 0rem;
      margin: 1rem auto 4rem;
    }
  }

  .banner p.photo-credit-internal {
    color: red;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
