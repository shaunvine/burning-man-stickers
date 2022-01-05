import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mwkajngd");
  if (state.succeeded) {
    return (
      <h4 className="contact-confirm">
        Thanks for contacting Burning Man Stickers. Typically we respond within
        24hours.
      </h4>
    );
  }
  return (
    <Wrapper>
      <form className="contact-form" onSubmit={handleSubmit}>
        <fieldset id="fs-frm-inputs">
          <input
            type="hidden"
            name="subject"
            value="Subject: Submission from BM sitckers Contact Form"
          />
          <label htmlFor="fullname">
            Full Name<sup>*</sup>
          </label>
          <input
            id="fullname"
            type="fullname"
            name="Name"
            placeholder="First and Last"
            required="*"
          />
          <ValidationError
            prefix="Full Name"
            field="fullname"
            errors={state.errors}
          />

          <label htmlFor="email">
            Email Address<sup>*</sup>
          </label>
          <input
            id="email"
            type="email"
            name="E-mail"
            placeholder="email@domain.com"
            required="*"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">
            Message<sup>*</sup>
          </label>
          <textarea
            id="message"
            name="Message"
            placeholder="Message"
            required="*"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="submit-btn"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </Wrapper>
  );
}
function App() {
  return <ContactForm />;
}

const Wrapper = styled.section`
  /* reset */
  form input,
  form select,
  form textarea,
  form fieldset,
  form optgroup,
  form label {
    font-family: inherit;
    font-size: 100%;
    color: inherit;
    border: none;
    border-radius: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  form label,
  form legend {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  /* border, padding, margin, width */
  form input,
  form select,
  form textarea {
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1em 5px;
    margin-bottom: 1.5rem;
  }
  form input:focus,
  form select:focus,
  form textarea:focus {
    background-color: white;
    outline-style: solid;
    outline-width: thin;
    outline-color: gray;
    outline-offset: -1px;
  }
  form [type="text"],
  form [type="email"],
  .StripeElement {
    width: 100%;
  }
  form [type="button"],
  form [type="submit"],
  form [type="reset"] {
    width: auto;
    cursor: pointer;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
  }
  form [type="button"]:focus,
  form [type="submit"]:focus,
  form [type="reset"]:focus {
    outline: none;
  }

  form select {
    text-transform: none;
  }

  button.submit-btn {
    max-width: 40%;
    text-transform: uppercase;
    background: #fb9101;
    color: var(--clr-primary-10);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    border-color: transparent;
  }
  button.submit-btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-7);
  }

  h4.contact-confirm {
    color: red;
  }
`;

export default App;
