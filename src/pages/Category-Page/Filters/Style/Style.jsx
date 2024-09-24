import style from "./style.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Style = ({ menuStyles, styleItems, setItems1 }) => {
  return (
    <div>
      <div className={style.container}>
        <div>
          <h3>Dress Style</h3>
          <hr />
        </div>
        <div className={style.containerStyle}>
          {menuStyles.map((sty) => (
            <div className={style.style} onClick={() => styleItems(sty)}>
              <p>{sty}</p>
              <KeyboardArrowRightIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Style;
