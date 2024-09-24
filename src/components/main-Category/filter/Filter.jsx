// import React from 'react'
import { useState } from "react";
import style from "./filter.module.css";
import dataSize from "../../../button.json";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <div className={style.section}>
      <div className={style.judul}>
        <h3>Filters</h3>
        <TuneIcon />
      </div>
      <hr />
      <div className={style.container}>
        <div className={style.category}>
          <p>T-shirts</p>
          <KeyboardArrowRightIcon />
        </div>
        <div className={style.category}>
          <p>Shorts</p>
          <KeyboardArrowRightIcon />
        </div>
        <div className={style.category}>
          <p>Shirts</p>
          <KeyboardArrowRightIcon />
        </div>
        <div className={style.category}>
          <p>Hoodie</p>
          <KeyboardArrowRightIcon />
        </div>
        <div className={style.category}>
          <p>Jeans</p>
          <KeyboardArrowRightIcon />
        </div>
      </div>
      <hr />
      <div className={style.container}>
        <div className={style.judul}>
          <h3>Price</h3>
          <KeyboardArrowUpIcon />
        </div>
        <div></div>
      </div>
      <div className={style.container}>
        <div className={style.judul}>
          <h3>Colors</h3>
          <KeyboardArrowUpIcon />
        </div>
        <div className={style.color}>
          <span className={style.green}></span>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.judul}>
          <h3>Size</h3>
          <KeyboardArrowUpIcon />
        </div>
        <div className={style.size}>
          {dataSize.map((item, id) => {
            return (
              <p
                key={item.id}
                onClick={() => setIsOpen(id)}
                className={isOpen == id ? style.large : style.p}
              >
                {item.size}{" "}
              </p>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <h3>Dress Style</h3>
          <KeyboardArrowUpIcon />
        </div>
        <div className={style.category}>
          <p>Casual</p>
          <KeyboardArrowRightIcon />
        </div>
        <div className={style.category}>
          <p>Formal</p>
          <KeyboardArrowRightIcon />
        </div>
        <div className={style.category}>
          <p>Party</p>
          <KeyboardArrowRightIcon />
        </div>
        <div className={style.category}>
          <p>Gym</p>
          <KeyboardArrowRightIcon />
        </div>
      </div>
      <button>Apply Filter</button>
    </div>
  );
};

export default Filter;
