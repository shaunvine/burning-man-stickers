import React from "react";
import Banner from "../components/Banner";
import { Hero, FeaturedProducts, About } from "../components";

export default function home() {
  return (
    <>
      <Hero>
        <Banner title="Burning Man Stickers" subtitle="A Catalog of BRC Stickers">
          {/* <Link to="/submit" className="btn btn-hero">
            submit a sticker
          </Link> */}
          <p className="photo-credit">Photo by: Leori Gill</p>
        </Banner>
      </Hero>
      <main>
        <About />
        <FeaturedProducts />
      </main>
    </>
  );
}
