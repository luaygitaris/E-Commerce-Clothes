// import React from 'react'
import style from './browse.module.css'

const Browse = () => {
  return (
    <section className={style.section}>
      <div>
        <h1>BROWSE BY dress STYLE</h1>
      </div>
      <div className={style.container}>
        <div className={style.content}>
            <img src="../../../src/assets/browse/Frame61.png" alt="" />
            <h2>Casual</h2>
        </div>
        <div className={style.content}>
            <img src="../../../src/assets/browse/Frame62.png" alt="" />
            <h2>Formal</h2>
        </div>
        <div className={style.content}>
            <img src="../../../src/assets/browse/Frame64.png" alt="" />
            <h2>Party</h2>
        </div>
        <div className={style.content}>
            <img src="../../../src/assets/browse/Frame63.png" alt="" />
            <h2>Gym</h2>
        </div>
      </div>
    </section>
  );
}

export default Browse
