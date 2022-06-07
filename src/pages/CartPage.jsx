import React from 'react';
import CartCSS from '../styles/pages/error.module.css';

export const CartPage = () => {
  return (
    <div className={CartCSS.cart_wrapper}>
      <p className={CartCSS.cart}>Cart is empty</p>
    </div>
  );
}

