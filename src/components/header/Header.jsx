// import React from "react";
import style from './header.module.css'

const Header = () => {
  return (
    <>
      <header>
        <div className={style.container}>
          <div className={style.about}>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className={style.button}>Shop Now</button>
          </div>
          <div className={style.keterangan}>
            <div>
              <h2>200+</h2>
              <p>International Brands</p>
            </div>
            <div>
              <h2>2,000+</h2>
              <p>High-Quality Products</p>
            </div>
            <div>
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <img src="../src/assets/header/header.png" alt="" />
      </header>
      <marquee>
        <img src="../../../src/assets/header/gucci.png" alt="" />
        <img src="../../../src/assets/header/prada.png" alt="" />
        <img src="../../../src/assets/header/zara.png" alt="" />
        <img src="../../../src/assets/header/versace.png" alt="" />
        <img src="../../../src/assets/header/calvin.png" alt="" />
      </marquee>
    </>
  );
};

export default Header;
