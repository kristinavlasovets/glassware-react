import React, {useState} from 'react';
import ProductCardCSS from '../styles/components/productCard.module.css';
import {Button} from './Button';

function ProductCard(props) {
  return (
    <div className={ProductCardCSS.product_card_wrapper}>
      <div className={ProductCardCSS.product_card_img}>
        <img
          src={props.src}
          alt="product"
          className={ProductCardCSS.out_of_stock_img}
        />
        <p className={ProductCardCSS.out_of_stock_tag}>out of stock</p>
      </div>
      <div className={ProductCardCSS.product_card_description}>
        <h1 className={ProductCardCSS.out_of_stock_text}>{props.name}</h1>
        <h2 className={ProductCardCSS.out_of_stock_text}>${props.price}</h2>
      </div>
      <Button className={ProductCardCSS.product_button} />
    </div>
  );
}

export default ProductCard;
