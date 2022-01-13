import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

function StickerForm() {
  const history = useHistory();
  const [state, handleSubmit] = useForm("xayazazo");
  if (state.succeeded) {
    setTimeout(() => {
      history.push("/thankyou");
    }, 10);
  }
  return (
    <Wrapper>
      <form
        className="contact-form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <fieldset id="fs-frm-inputs">
          <input
            type="hidden"
            name="subject"
            value="Subject: Sticker Submission from BM Form"
          />
          <label htmlFor="name">
            Name<sup>*</sup>
          </label>
          <input
            id="name"
            type="name"
            name="Name"
            placeholder="Your Name"
            required="*"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="createdby">
            Created By<sup>*</sup>
          </label>
          <input
            id="createdby"
            type="createdby"
            name="Created By"
            placeholder="Creators Name"
            required="*"
          />
          <ValidationError
            prefix="Created By"
            field="createdby"
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

          <label htmlFor="stickertitle">Sticker Title</label>
          <input
            id="stickertitle"
            type="stickertitle"
            name="Sticker Title"
            placeholder="Sticker Title"
          />
          <ValidationError
            prefix="Sticker Title"
            field="stickertitle"
            errors={state.errors}
          />

          <label htmlFor="stickeryear">
            Sticker Year<sup>*</sup>
          </label>
          <input
            id="stickeryear"
            type="stickeryear"
            name="Sticker Year"
            placeholder="Sticker Year"
            required="*"
          />
          <ValidationError
            prefix="Sticker Year"
            field="stickeryear"
            errors={state.errors}
          />

          <label htmlFor="stickertype">
            Type of Sticker<sup>*</sup>
          </label>
          <select name="Stickertype" id="stickertype" required="stickertype">
            <option value="">Make a selection</option>
            <option value="Theme Camp">Theme Camp</option>
            <option value="Art Project">Art Project</option>
            <option value="Art Car">Art Car</option>
          </select>
          <ValidationError
            prefix="Sticker Type"
            field="stickertype"
            errors={state.errors}
          />

          <label htmlFor="themecamp">Theme Camp / Art Project / Art Car</label>
          <input
            id="themecamp"
            type="themecamp"
            name="Themecamp"
            placeholder="Theme Camp"
          />
          <ValidationError
            prefix="Theme Camp"
            field="themecamp"
            errors={state.errors}
          />
          <label htmlFor="themecamp">
            Upload Sticker <sup className="file-size">Max file size: 25MB</sup>
          </label>
          <input
            id="file"
            type="file"
            name="Attachment"
            accept="image/png, image/jpg, image/jpeg. image/svg, image/gif, image/webp"
            required="*"
          />
          <ValidationError prefix="File" field="file" errors={state.errors} />

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
  return <StickerForm />;
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
    outline-width: medium;
    outline-color: red;
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

    margin: 0.5rem;
  }a.home-contact.btn {
  

  h4.contact-confirm {
    color: red;
  }

  .file-size {
    color: #fb9101;
  }
`;

export default App;
