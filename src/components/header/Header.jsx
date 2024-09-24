// import React from "react";
import style from "./header.module.css";
import headerImg from "../../../src/assets/header/header.png";
import gucci from "../../../src/assets/header/gucci.png";
import prada from "../../../src/assets/header/prada.png";
import zara from "../../../src/assets/header/zara.png";
import versace from "../../../src/assets/header/versace.png";
import calvin from "../../../src/assets/header/calvin.png";

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
        <img src={headerImg} alt="" />
      </header>
      <marquee>
        <img src={gucci} alt="" />
        <img src={prada} alt="" />
        <img src={zara} alt="" />
        <img src={versace} alt="" />
        <img src={calvin} alt="" />
      </marquee>
    </>
  );
};

export default Header;
