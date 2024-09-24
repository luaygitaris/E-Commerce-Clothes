// import React from 'react'
import data from "../../data.json";
import Cart from "./cart";
import style from "./arrivals.module.css";
import { Link } from "react-router-dom";
// import { useState, useTransition } from "react";

const Arrivals = () => {
  
  return (
    <>
      <section className={style.section}>
        <div>
          <h1>New Arrivals</h1>
        </div>
        <div className={style.container}>
          {data.slice(0, 4).map((item) => {
            return (
              <Cart
                key={item.id}
                img={item.image}
                bintang={item.bintang}
                merk={item.merk}
                harga={item.harga}
              ></Cart>
            );
          })}
        </div>
        <div>
          <Link to={"/category"}>
            <button>View All</button>
          </Link>
        </div>
      </section>
      <section className={style.section}>
        <hr />
      </section>
      <section className={style.section}>
        <div>
          <h1>Top Selling</h1>
        </div>
        <div className={style.container}>
          {data.slice(4, 8).map((item) => {
            return (
              <Cart
                key={item.id}
                img={item.image}
                bintang={item.bintang}
                merk={item.merk}
                harga={item.harga}
              ></Cart>
            );
          })}
        </div>
        <div>
          <Link to={"/category"}>
            <button>View All</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Arrivals;
