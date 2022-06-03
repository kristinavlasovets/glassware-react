import React from "react";
import ProductCard from "../components/ProductCard";

import IndexCSS from "../styles/pages/home.module.css";
import HomeCSS from "../styles/pages/home.module.css";

import homeTitle from '../assets/img/home_title.png';

function Home() {
  return (
    <div className={IndexCSS.container}>
      <div className={HomeCSS.home}>
        <h1 backgroundImage={homeTitle} className={HomeCSS.home_title}>Care for a glass?</h1>
        <div className={HomeCSS.home_wrapper}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
