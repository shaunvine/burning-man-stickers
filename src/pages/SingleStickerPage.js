import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { Loading, Error, StickerImages, Hero, PageHero } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import showdown from "showdown";

const markdownConverter = new showdown.Converter();

const SingleStickerPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);
  // console.log(product);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    // price,
    year,
    officialtheme,
    BMTheme,
    themecampname,
    artprojectname,
    artprojectlink,
    artcarname,
    artcarlink,
    official,
    createdby,
    contributor,
    desc,
    camplink,
    creatorinfo,
    // id: sku,
    image,
  } = product.fields;

  const createHTML = (markdown) => {
    // return keyword stops the execution of the function
    return markdownConverter.makeHtml(markdown);
  };

  return (
    <main>
      <Hero hero="singleStickerHero">
        <Banner title="The Folly">
          <p className="photo-credit">Photo by: Jamen Percy</p>
        </Banner>
      </Hero>
      <Wrapper>
        <PageHero title={name} product />
        <div className="section section-center page">
          {/* <Link to="/stickers" className="btn">
          back to stickers
        </Link> */}
          <div className="product-center">
            <StickerImages images={image} />
            <section className="content">
              <h2>{name}</h2>
              {/* <Stars stars={stars} reviews={reviews} /> */}
              <p className="info">
                <span>Year: </span>
                <span className="sticker-year">{year}</span>
              </p>
              {BMTheme && (
                <p className="info">
                  <span>Theme: </span>
                  <span className="sticker-year">
                    <Link
                      to={{
                        pathname: `${BMTheme}
               `,
                      }}
                      target="_blank"
                    >
                      {officialtheme}
                    </Link>
                  </span>
                </p>
              )}

              {createdby && (
                <p className="info">
                  <span>Creator:</span>
                  <span className="sticker-year">{createdby}</span>
                  {creatorinfo && (
                    <span className="info">
                      <span></span>
                      <Link
                        to={{
                          pathname: `${creatorinfo}
               `,
                        }}
                        target="_blank"
                      >
                        <span className="creator">Creator Information</span>
                      </Link>
                    </span>
                  )}
                </p>
              )}
              {contributor && (
                <p className="info">
                  <span>Contributor:</span>
                  <span className="sticker-year">{contributor}</span>
                </p>
              )}

              {themecampname && (
                <p className="info">
                  <span>Theme Camp:</span>
                  <span className="sticker-year">{themecampname}</span>
                  {camplink && (
                    <span className="info">
                      <span></span>
                      <Link
                        to={{
                          pathname: `${camplink}
               `,
                        }}
                        target="_blank"
                      >
                        Camp Information
                      </Link>
                    </span>
                  )}
                </p>
              )}

              {artprojectname && (
                <p className="info">
                  <span>Art Project:</span>
                  <span className="sticker-year">{artprojectname}</span>
                  {artprojectlink && (
                    <span className="info">
                      <span></span>
                      <Link
                        to={{
                          pathname: `${artprojectlink}
               `,
                        }}
                        target="_blank"
                      >
                        Art Project Information
                      </Link>
                    </span>
                  )}
                </p>
              )}

              {artcarname && (
                <p className="info">
                  <span>Art Car:</span>
                  <span className="sticker-year">{artcarname}</span>
                  {artcarlink && (
                    <span className="info">
                      <span></span>
                      <Link
                        to={{
                          pathname: `${artcarlink}
               `,
                        }}
                        target="_blank"
                      >
                        Art Car Information
                      </Link>
                    </span>
                  )}
                </p>
              )}

              {official && (
                <p className="info">
                  <span>"Official Sticker"</span> {official}
                </p>
              )}
              {desc && (
                <p className="info">
                  <span>Details:</span>
                  <span
                    className="sticker-year"
                    dangerouslySetInnerHTML={{
                      __html: createHTML(product.fields["desc"]),
                    }}
                  />
                </p>
              )}

              <div>
                <Link to="/stickers" className="btn btn-bottom">
                  back to stickers
                </Link>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .year {
    color: var(--clr-primary-5);
  }

  span.sticker-year {
    color: #696969;
    font-weight: 400 !important;
  }

  .creator {
    font-weight: 400!important;
    color: #FB9107;
  }

  .link {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  .btn-bottom {
    margin-top: 1rem;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
    .info {
      text-transform: capitalize;
      width: 450px;
      display: grid;
      grid-template-columns: 150px 1fr;
      color: var(--clr-primary-5);
      span {
        font-weight: 700;
      }
  }

@media (max-width: 992px) {
    .info {
      text-transform: capitalize;
      width: 350px;
      display: grid;
      grid-template-columns: 150px 1fr;
      color: var(--clr-primary-5);
      span {
        font-weight: 700;
      }
  }
`;

export default SingleStickerPage;
