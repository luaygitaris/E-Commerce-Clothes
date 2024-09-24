// import React from 'react'
import style from './browse.module.css'
import casual from "../../../src/assets/browse/Frame61.png"
import formal from "../../../src/assets/browse/Frame62.png"
import party from "../../../src/assets/browse/Frame64.png"
import gym from "../../../src/assets/browse/Frame63.png"

const Browse = () => {
  return (
    <section className={style.section}>
      <div>
        <h1>BROWSE BY dress STYLE</h1>
      </div>
      <div className={style.container}>
        <div className={style.content}>
            <img src={casual} alt="" />
            <h2>Casual</h2>
        </div>
        <div className={style.content}>
            <img src={formal} alt="" />
            <h2>Formal</h2>
        </div>
        <div className={style.content}>
            <img src={party} alt="" />
            <h2>Party</h2>
        </div>
        <div className={style.content}>
            <img src={gym} alt="" />
            <h2>Gym</h2>
        </div>
      </div>
    </section>
  );
}

export default Browse
