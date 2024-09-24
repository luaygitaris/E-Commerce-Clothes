// import React from 'react'
import style from './cartCustomer.module.css'

const CartCustomer = (props) => {
  return (
    <div className={style.container}>
      <p>{props.bintang}</p>
      <h3>{props.nama}</h3>
      <p className={style.keterangan}>{props.keterangan}</p>
    </div>
  );
};

export default CartCustomer;
