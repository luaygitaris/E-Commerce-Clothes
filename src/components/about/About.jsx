// import React from 'react'
import style from "./about.module.css";
import Review from "../customer/review-product/Review";
import DetailProduct from "../shop/product/detail-product/DetailProduct";
import { useState } from "react";
import Button from "./components/Button";

const buttons = ["Product Detail", "Reviews & Rating", "FAQs"];

const About = () => {
  const RenderComponent = ({ index }) => {
    switch (index) {
      case 0:
        return <DetailProduct />;
        break;
      case 1:
        return <Review />;
        break;
      case 2:
        return <DetailProduct />;
        break;
      default:
        break;
    }
  };
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className={style.section}>
      <Button
        buttons={buttons}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      <div className={style.content}>
        <RenderComponent index={isSelected} />
      </div>
    </div>
  );
};

export default About;
