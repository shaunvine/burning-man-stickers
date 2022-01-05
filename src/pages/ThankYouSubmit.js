import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageHero, Hero } from "../components";
import Banner from "../components/Banner";

const ThankYouSumit = () => {
  return (
    <main>
      <Hero hero="stickerSubmitHero">
        <Banner title="The Sonic Runway">
          <p className="photo-credit">Photo by: Danee Hazama</p>
        </Banner>
      </Hero>
      <PageHero title="Thank You" />
      <Wrapper>
        <div className="section-center">
          <h3>Thank you for submitting a sticker.</h3>
          <p>We Typically respond within 24 hours</p>

          <div className="content">
            <div>
              <div className="underline"></div>
              <div className="thank-you-btns">
                <Link to="/" className="home-contact btn btn-hero">
                  Home
                </Link>
                <Link to="/submit" className="home-contact btn btn-hero">
                  Submit another sticker?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: #fb9101;;
  }

h3 {
      font-weight: 300;
  }

h4.contact-confirm {
      color: #fb9101;
      font-weight: 200;
  }

@media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      gap: 2rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  // @media (min-width: 1280px) {
  //   padding: 15rem 0;
  // }

  .home-contact {
    display: grid
    grid-template-columns: 40% auto;
  }

  a.home-contact.btn {
      margin: .5rem;
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

thank-you-btns {
    display: grid;
    grid-template-columns: 20% 1fr 1fr 1fr;
    grid-column-gap: 1rem;



}
`;

export default ThankYouSumit;
