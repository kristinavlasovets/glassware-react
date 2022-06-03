import React from 'react';
import HeaderCSS from "../styles/components/header.module.css";

function Header() {
    return (
        <header>
          <div className={HeaderCSS.container}>
            <div className={HeaderCSS.header_wrapper}>
              <nav>
                <ul>
                  
                    <li>Home</li>
                    <li>About us</li>
        
                </ul>
              </nav>
            </div>
          </div>
        </header>
      );
  }
  
  export default Header;