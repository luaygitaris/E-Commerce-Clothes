import style from "./navbar.module.css";
import Pencarian from "./search/Pencarian";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={style.nav}>
      <div className={style.hamburger} onClick={toggleMenu}>
        <MenuIcon />
      </div>
      <div>
        <Link to={"/"}>
          <h2>SHOP.CO</h2>
        </Link>
      </div>
      <ul className={isOpen ? style.active : style.list}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category"}>Shop ▼</Link>
        </li>
        <li>
          <a href="">On Sale</a>
        </li>
        <li>
          <a href="">New Arrivals</a>
        </li>
        <li>
          <a href="">Brands</a>
        </li>
      </ul>
      <div className={isOpen ? style.show : style.search}>
        <Pencarian />
      </div>
      <div className={style.cart}>
        <ShoppingCartIcon />
        <AccountCircleIcon />
      </div>
    </nav>
  );
};

export default Navbar;
