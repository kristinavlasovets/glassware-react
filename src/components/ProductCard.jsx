import React from 'react';
import ProductCardCSS from "../styles/components/productCard.module.css";
import productA from '../assets/img/productA.jpg';

function ProductCard() {
    return (
        <div className={ProductCardCSS.product_card_wrapper}>
          <div className={ProductCardCSS.product_card_img}>
            <img src={productA} alt="product" className={ProductCardCSS.out_of_stock_img} />
            <p className={ProductCardCSS.out_of_stock_tag}>out of stock</p>
          </div>
          <div className={ProductCardCSS.product_card_description}>
            <h1 className={ProductCardCSS.out_of_stock_text} >Hand Blown Japanese Bedside Carafe Glass Set</h1>
            <h2 className={ProductCardCSS.out_of_stock_text}>$42.00</h2>
          </div>
        </div>
      );
  }
  
  export default ProductCard;
  