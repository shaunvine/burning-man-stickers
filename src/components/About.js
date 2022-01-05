import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CountDown from "../components/CountDown";

const About = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <div className="header-inner">
            <p>
              This website has been created to catalog stickers that the BRC
              Citizens have created to gift.
            </p>
            <p>
              Sticker contributions to this catalog will not be sold and credit
              will be given to the creators of the art work.
            </p>
            <p>
              If you would like to share your sticker or one you were gifted
              please click on the "Submit A Sticker" button so that it can be
              added.
            </p>

            <p>
              Thank you all for making this the most incredible event in the
              world.<br></br>
              <span className="signature">fingerwave.</span>
            </p>
          </div>
          <div className="submit-sticker">
            <div className="submit-inner">
              <Link to="/submit" className="btn btn-hero">
                submit a sticker
              </Link>
            </div>
            <div className="countdown-inner">
              <CountDown />
            </div>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 2rem 0;
  // background: var(--clr-primary-10);
  .header h3 {
    margin-bottom: 4rem;
  }

  .header {
    background-color: transparent;
  }

  .header-inner {
    width: 90%;
    margin: auto;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
    line-height: 1.25;
    font-weight: 300;
    color: var(--clr-grey-3);
  }
  .about-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    // background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }

  .submit-sticker {
    margin: 0.5rem auto;
    padding: 1rem;
  }

  .submit-inner,
  .countdown-inner {
    margin: 2rem auto;
  }

  .signature {
    margin-top: 0.25rem;
    color: #fb9101;
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: 0.2rem;
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 2fr 1fr;
      margin-bottom: 5rem;
      background-color: transparent;
    }
  }
  @media (min-width: 576px) {
    .about-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default About;
