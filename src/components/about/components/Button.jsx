import style from "../about.module.css";

const Button = ({ buttons, isSelected, setIsSelected }) => {
  return (
    <div className={style.container}>
      <div className={style.buttoncontainer}>
        {buttons.map((text, index) => {
          return (
            <button
              key={index}
              className={
                isSelected == index ? style.selectedbutton : style.button
              }
              onClick={() => setIsSelected(index)}
            >
              {text}
            </button>
          );
        })}
      </div>
      <hr />
    </div>
  );
};
export default Button;
