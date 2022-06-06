import React from "react";
import { Button } from "../components/Button";
import IndexCSS from "../styles/pages/home.module.css";
import ProductPageCSS from "../styles/pages/product.module.css";

export const ProductPage = (props) => {
  return (
    <div className={IndexCSS.container}>
      <div className={ProductPageCSS.product_page}>
        <div className="overlay"></div>

        <div className={ProductPageCSS.product_page_carousel}>
          <img
            src="https://images.food52.com/rYgCbga2v_22TjvpQXwcCWugiyQ=/768x768/fca46e8e-6fbc-4907-97b3-624f62180888--2020-0731_ivv-glassware_retro-goblet_1x1_james-ransom-195.jpg"
            alt="product"
            className={ProductPageCSS.product_page_carousel_img}
          />
          <img
            src="https://images.food52.com/rYgCbga2v_22TjvpQXwcCWugiyQ=/768x768/fca46e8e-6fbc-4907-97b3-624f62180888--2020-0731_ivv-glassware_retro-goblet_1x1_james-ransom-195.jpg"
            alt="product"
            className={ProductPageCSS.product_page_carousel_img}
          />
          <img
            src="https://images.food52.com/rYgCbga2v_22TjvpQXwcCWugiyQ=/768x768/fca46e8e-6fbc-4907-97b3-624f62180888--2020-0731_ivv-glassware_retro-goblet_1x1_james-ransom-195.jpg"
            alt="product"
            className={ProductPageCSS.product_page_carousel_img}
          />
        </div>

        <div className={ProductPageCSS.product_page_card}>
          <div className={ProductPageCSS.product_page_img_wrapper}>
            <img
              src="https://images.food52.com/rYgCbga2v_22TjvpQXwcCWugiyQ=/768x768/fca46e8e-6fbc-4907-97b3-624f62180888--2020-0731_ivv-glassware_retro-goblet_1x1_james-ransom-195.jpg"
              alt="product"
              className={ProductPageCSS.product_page_img}
            />
          </div>

          <div className={ProductPageCSS.product_page_info}>
            <div className={ProductPageCSS.product_page_title}>
              <p>Five Two Stackable Glassware</p>
            </div>

            <div className={ProductPageCSS.product_page_size_wrapper}>
              <p>Available:</p>
              <p>42 it.</p>
            </div>

            <div className={ProductPageCSS.product_page_price}>
              <p>$50.00</p>
            </div>

            <div className={ProductPageCSS.product_page_decscription}>
              <p>
                Made by us, made with you. Stackable. Strong. Sized just right.
                Our Italian-made Five Two glassware is designed to save space in
                cupboards the world over. In two essential sizes you can depend
                on each and every day, they’ll also stand by for mixed drinks or
                dessert—and even make an impromptu flower vase. Here’s to the
                most versatile glassware on the planet.
              </p>
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
