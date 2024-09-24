// import { useState } from "react";
import style from "./product.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DetailProduct from "./detail-product/DetailProduct";

const Product = () => {
  return (
    <section className={style.section}>
      <div className={style.containerPage}>
        <div className={style.page}>
          <p>Home</p>
          <div>
            <div className={style.Icon}>
              <ArrowForwardIosIcon />
            </div>
            <div className={style.icon}>
              <ArrowForwardIosIcon fontSize="2" />
            </div>
          </div>
        </div>
        <div className={style.page}>
          <p>Shop</p>
          <div className={style.Icon}>
            <ArrowForwardIosIcon />
          </div>
          <div className={style.icon}>
            <ArrowForwardIosIcon fontSize="2" />
          </div>
        </div>
        <div className={style.page}>
          <p>Men</p>
          <div className={style.Icon}>
            <ArrowForwardIosIcon />
          </div>
          <div className={style.icon}>
            <ArrowForwardIosIcon fontSize="2" />
          </div>
        </div>
        <div className={style.active}>
          <p>T-shirt</p>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.containerProduct}>
          <div className={style.imgProduct}>
            <div className={style.imgTiny}>
              <img src="../../../../src/assets/product/image2.png" alt="" />
              <img src="../../../../src/assets/product/image5.png" alt="" />
              <img src="../../../../src/assets/product/image6.png" alt="" />
            </div>
            <div>
              <img
                src="../../../../src/assets/product/image1.png"
                alt=""
                className={style.img}
              />
            </div>
          </div>
        </div>
        <DetailProduct />
      </div>
    </section>
  );
};

export default Product;
