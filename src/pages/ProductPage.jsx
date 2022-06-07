import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {Button} from '../components/Button';
import IndexCSS from '../styles/pages/home.module.css';
import ProductPageCSS from '../styles/pages/product.module.css';

export const ProductPage = ({props}) => {
  const params = useParams();

  const {state} = useLocation();
  const {id, name, price, src, quantity, description} = state;

  return (
    <div className={IndexCSS.container}>
      <div className={ProductPageCSS.product_page}>
        <div className={ProductPageCSS.product_page_card}>
          <div className={ProductPageCSS.product_page_img_wrapper}>
            <img
              src={src}
              alt="product"
              className={ProductPageCSS.product_page_img}
            />
          </div>

          <div className={ProductPageCSS.product_page_info}>
            <div className={ProductPageCSS.product_page_title}>
              <p>{name}</p>
            </div>

            <div className={ProductPageCSS.product_page_size_wrapper}>
              <p>Available:</p>
              <p>{quantity} it.</p>
            </div>

            <div className={ProductPageCSS.product_page_price}>
              <p>${price}</p>
            </div>

            <div className={ProductPageCSS.product_page_decscription}>
              <p>{description}</p>
            </div>

            <div className={ProductPageCSS.product_page_quantity_block}>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>

            <Button
              text="Add to  cart"
              className={ProductPageCSS.product_page_button}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
