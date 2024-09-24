// import React from "react";
import Header from "../components/header/Header";
import Browse from "../components/browse-by/Browse";
import Customer from "../components/customer/Customer";
import Arrivals from "../components/shop/Arrivals";

const Home = () => {
  return (
    <>
      <Header />
      <Arrivals />
      <Browse />
      <Customer />
    </>
  );
};

export default Home;
