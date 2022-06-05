import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';

import IndexCSS from '../styles/pages/home.module.css';
import HomeCSS from '../styles/pages/home.module.css';

function Home() {
  const [glassware, setGlassware] = useState([]);

  const getData = async (url) => {
    const response = await fetch(url);
    const {glassware} = await response.json();
    setGlassware(glassware);
  };

  useEffect(() => {
    getData('./db.json');
  }, []);
  return (
    <div className={IndexCSS.container}>
      <div className={HomeCSS.home}>
        <p className={HomeCSS.home_title}>Care for a glass?</p>
        <div className={HomeCSS.home_wrapper}>
          {glassware &&
            glassware.map((item) => (
              <ProductCard
                key={item.id}
                name={item.title}
                src={item.src}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
