import { Link } from "react-router-dom";
import style from "./card.module.css";
// import Data from "./data.json";
const Card = ({ item }) => {
  return (
    <div>
      <div className={style.section}>
        {item.map((val, index) => (
          <Link to={"/product"} key={index} className={style.container}>
            <div className={style.img}>
              <img src={val.image} alt="" />
            </div>
            <div className={style.keterangan}>
              <h4>{val.merk}</h4>
              <p>{val.bintang}</p>
              <h4>{val.harga}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
