import { useState } from "react";
import style from "../product.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import dataSize from "../../../../button.json";

const DetailProduct = () => {
  const [isOpen, setIsOpen] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={style.containerAbout}>
      <div className={style.about}>
        <div>
          <h2>One Life Graphic T-shirt</h2>
          <p>⭐ ⭐ ⭐ ⭐</p>
        </div>
        <h2>$300</h2>
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>
      <hr />
      <div className={style.containerColor}>
        <p>Select Color</p>
        <div>
          <span className={style.color}>✓</span>
          <span className={style.span}></span>
          <span className={style.span}></span>
        </div>
      </div>
      <hr />
      <div className={style.containerColor}>
        <p>Choose Size</p>
        <div className={style.size}>
          {dataSize.slice(2, 6).map((item, id) => {
            return (
              <p
                key={id}
                onClick={() => setIsOpen(id)}
                className={isOpen == id ? style.large : style.p}
              >
                {item.size}{" "}
              </p>
            );
          })}
        </div>
      </div>
      <hr />
      <div className={style.container}>
        <div className={style.quantity}>
          <RemoveIcon onClick={handleMinusQuantity} />
          <span>{quantity}</span>
          <AddIcon onClick={handlePlusQuantity} />
        </div>
        <button>
          <a className={style.button} href="">Add to Cart</a>
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;
