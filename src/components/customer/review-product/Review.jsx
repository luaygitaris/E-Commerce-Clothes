// import React from "react";
import dataCustomer from "../dataCustomer.json";
import style from "./review.module.css";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CartCustomer from "../cartCustomer";

const Review = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <h3>All Reviews</h3>
        <div className={style.setting}>
          <DisplaySettingsIcon />
          <div className={style.latest}>
            <p>Latest</p>
            <KeyboardArrowDownIcon />
          </div>
          <button className={style.button}>Write a Review</button>
        </div>
      </div>
      <div className={style.containerReview}>
        {dataCustomer.map((item) => {
          return (
            <CartCustomer
              key={item.id}
              bintang={item.bintang}
              nama={item.nama}
              keterangan={item.keterangan}
            ></CartCustomer>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
