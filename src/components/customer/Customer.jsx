// import React from "react";
import style from "./customer.module.css";
import dataCustomer from "./dataCustomer.json";
import CartCustomer from "./cartCustomer";

const Customer = () => {
  return (
    <section className={style.section}>
      <h2>OUR HAPPY CUSTOMERS</h2>
      <div className={style.container}>
        {dataCustomer.map((item, index) => {
          return (
            <CartCustomer
              key={index}
              bintang={item.bintang}
              nama={item.nama}
              keterangan={item.keterangan}
            ></CartCustomer>
          )
        })}
      </div>
    </section>
  );
};

export default Customer;
