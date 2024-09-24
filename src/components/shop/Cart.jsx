import { Link } from "react-router-dom";
import style from "./cart.module.css";

const Cart = (props) => {
  return (
    <Link to={"/product"}>
      <div className={style.container}>
        <div className={style.img}>
          <img src={props.img} alt="" />
        </div>
        <div className={style.keterangan}>
          <h3>{props.merk}</h3>
          <p>{props.bintang}</p>
          <h3>{props.harga}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
