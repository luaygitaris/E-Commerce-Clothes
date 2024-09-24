import Data from "../../data.json";
import style from "./categoryPage.module.css";
import { useState } from "react";
import Jenis from "./Filters/Jenis/Jenis";
import Card from "./Card/Card";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Style from "./Filters/Style/Style";
import TuneIcon from "@mui/icons-material/Tune";

const Categorypage = () => {
  const [item, setItems] = useState(Data);
  const [item1, setItems1] = useState(Data);
  const menuItems = [...new Set(Data.map((val) => val.kategori))];
  const menuStyles = [...new Set(Data.map((style) => style.style))];
  const filterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.kategori === cat);
    setItems(newItems);
  };
  const styleItems = (style) => {
    const newStyle = Data.filter((newstyle) => newstyle.style === style);
    setItems(newStyle);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className={style.section}>
      <div className={style.judul}>
        <h4>Home</h4>
        <KeyboardArrowRightIcon />
        <h4>Casual</h4>
      </div>
      <div className={style.filter}>
        <div onClick={toggleFilters} className={style.toggle}>
          <TuneIcon />
        </div>
        <h3>Filters</h3>
      </div>
      <div className={style.container}>
        <div
          className={isOpen ? style.active : style.containerFilter}
        >
          <Jenis
            menuItems={menuItems}
            filterItems={filterItems}
            setItems={setItems}
          />
          <Style
            menuStyles={menuStyles}
            styleItems={styleItems}
            setItems1={setItems1}
          />
        </div>
        <Card item={item} />
      </div>
    </section>
  );
};

export default Categorypage;
