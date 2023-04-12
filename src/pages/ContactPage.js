import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageHero, Hero } from "../components";
import Banner from "../components/Banner";
import ContactForm from "../Forms/ContactForm";

const Contact = () => {
  return (
    <main>
      <Hero hero="contactHero">
        <Banner title="The Man">
          <p className="photo-credit">Photo by: Leori Gill</p>
        </Banner>
      </Hero>
      <PageHero title="Contact" />
      <Wrapper>
        <div className="section-center">
          <h3>Contact Burning Man Stickers</h3>
          <div className="content">
            <ContactForm />
            {/* <div>
              <div className="underline"></div>
              <Link to="/" className="home-contact btn btn-hero">
                Home
              </Link>
            </div> */}
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
    color: #fb9101;
  }

  h3 {
    font-weight: 300;
  }

  h4.contact-confirm {
    color: #fb9101;
    font-weight: 200;
  }

  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
    border: 1px solid #696969;
    padding: 2rem 1rem;
    border-radius: 4px;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
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
    display: grid;
    grid-template-columns: 40% auto;
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

  a.home-contact.btn {
    margin: 0.5rem;
  }
`;

export default Contact;
