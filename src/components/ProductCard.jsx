import React from "react";
import { Link } from "react-router-dom";
import ProductCardCSS from "../styles/components/productCard.module.css";
import { Button } from "./Button";

export const ProductCard = (props) => {
  return (
    <div className={ProductCardCSS.product_card_wrapper}>
      <div className={ProductCardCSS.product_card_img}>
          <Link to={`/glassware/:${props.id}`}>
          <img
            src={props.src}
            alt="product"
            className={props.inStock ? "" : ProductCardCSS.out_of_stock_img}
          />
          </Link>
        <p className={ProductCardCSS.out_of_stock_tag}>
          {props.inStock ? "" : "Out of stock"}
        </p>
      </div>
      <div className={ProductCardCSS.product_card_description}>
        <Link to={`/glassware/:${props.id}`} style={{ textDecoration: 'none', color: 'rgb(161, 143, 122)' }}><h1>{props.name}</h1></Link>
        <h2>${props.price}</h2>
      </div>
      <Button
        text={props.inStock ? "Add to  cart" : "Out of stock"}
        className={ProductCardCSS.product_button}
      />
    </div>
  );
}

