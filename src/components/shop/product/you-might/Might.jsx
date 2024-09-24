import React from 'react'
import data from '../../../../data.json'
import Cart from '../../Cart';
import style from './might.module.css'

const Might = () => {
  return (
    <>
      <section className={style.section}>
        <div>
          <h1>You might also like</h1>
        </div>
        <div className={style.container}>
          {data.slice(8, 12).map((item) => {
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
      </section>
    </>
  );
}

export default Might
