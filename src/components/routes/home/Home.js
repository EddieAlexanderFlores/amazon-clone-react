import React from "react";
import bannerImage from "../../../images/banner/home-feature-product.jpg";
import bannerImageMobile from "../../../images/banner/home-feature-product-mobile.jpg";
import Product from "./Product";
import "./Home.css";

import { products } from "./productDB";

function Home() {
  return (
    <div className="home">
      <div className="home-banner-container">
        <img
          className="home-banner-image big-screen"
          src={bannerImage}
          alt="Echo Dot Kids"
        />
        <img
          className="home-banner-image mobile"
          src={bannerImageMobile}
          alt="Echo Dot Kids"
        />
        <div className="home-banner-fade-bottom" />
      </div>

      {/* Product id, title, price, rating, image */}
      <div className="home-row">
        {products.map((item, i) => (
          <Product
            key={i}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
