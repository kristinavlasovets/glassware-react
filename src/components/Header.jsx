import React from "react";
import { Link } from "react-router-dom";
import HeaderCSS from "../styles/components/header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={HeaderCSS.container}>
        <div className={HeaderCSS.header_wrapper}>
          <nav>
            <ul>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <li>Home</li>
              </Link>
              <Link to='/aboutPage' style={{ textDecoration: 'none' }}>
                <li>About us</li>
              </Link>
            </ul>
          </nav>
          <div className={HeaderCSS.header_status}>X items in your cart. In total: Y $</div>
        </div>
      </div>
    </header>
  );
}


