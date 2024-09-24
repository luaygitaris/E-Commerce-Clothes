import style from "./jenis.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Jenis = ({ menuItems, filterItems, setItems }) => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div>
          <h3>Filters</h3>
          <hr />
        </div>
        <div className={style.containerCategori}>
          {menuItems.map((val, index) => (
            <div
              href=""
              key={index}
              className={style.categori}
              onClick={() => filterItems(val)}
            >
              <p>{val}</p>
              <KeyboardArrowRightIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jenis;
