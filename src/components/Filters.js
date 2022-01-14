import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const {
    filters: { text, year, shape, themecamp, artproject, artcar, official },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();

  const years = getUniqueValues(all_products, "year");
  const shapes = getUniqueValues(all_products, "shape");

  // sort years filter in descending order
  years.sort(compareYears);
  function compareYears(a, b) {
    return b - a;
  }
  // sort shapes alphabetically
  shapes.sort();
  // console.log(years);

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* start year */}
          <div className="form-control">
            <h5>year</h5>
            <select
              name="year"
              value={year}
              onChange={updateFilters}
              className="year"
            >
              {years.map((stickeryear, index) => {
                return (
                  <option key={index} value={stickeryear}>
                    {stickeryear}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of year */}
          {/* sticker shape */}
          <div className="form-control">
            <h5>sticker shape</h5>
            <select
              name="shape"
              value={shape}
              onChange={updateFilters}
              className="shape"
            >
              {shapes.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end sticker shape */}
          {/* start themecamp */}
          <div className="form-control themecamp">
            <label htmlFor="themecamp">Theme Camps</label>
            <input
              type="checkbox"
              name="themecamp"
              id="themecamp"
              checked={themecamp}
              onChange={updateFilters}
            />
          </div>
          {/* end of  themecamp */}
          {/* start artproject */}
          <div className="form-control themecamp">
            <label htmlFor="artproject">Art Projects</label>
            <input
              type="checkbox"
              name="artproject"
              id="artproject"
              checked={artproject}
              onChange={updateFilters}
            />
          </div>
          {/* end of  artproject */}
          {/* start artcar */}
          <div className="form-control themecamp">
            <label htmlFor="artcar">Art Cars</label>
            <input
              type="checkbox"
              name="artcar"
              id="artcar"
              checked={artcar}
              onChange={updateFilters}
            />
          </div>
          {/* end of  artcar */}
          {/* start official sticker */}
          <div className="form-control themecamp">
            <label htmlFor="official">"Official sticker"</label>
            <input
              type="checkbox"
              name="official"
              id="official"
              checked={official}
              onChange={updateFilters}
            />
          </div>
          {/* end of official sticker */}
          {/* start search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search input */}
          {/* start clear filters */}
          <button type="button" className="clear-btn" onClick={clearFilters}>
            clear filters
          </button>
          {/* end clear filters */}
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    max-width: 82%;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .year {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    text-transform: capitalize;
    min-width: 82%;
    -webkit-appearance: none;
  }
  .shape {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    text-transform: capitalize;
    min-width: 82%;
    -webkit-appearance: none;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }

  // input#themecamp,
  // input#artproject,
  // input#artcar,
  // input#offical {
  //   display: inline-block;
  //   width: 80%;
  // }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .themecamp {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .clear-btn {
      background: #fb9101;
      color: var(--clr-white);
      padding: 0.5rem 0.5rem;
      border-radius: var(--radius);
      width: 50%;
    }
  }
  @media (min-width: 769px) {
    .clear-btn {
      background: #fb9101;
      color: var(--clr-white);
      padding: 0.5rem 0.5rem;
      border-radius: var(--radius);
      min-width: 82%;
    }
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
