import styles from "./Button.module.css";
import plus from "./plus.svg";
const Button = ({ ...props }) => {
  return (
    <button className={styles.btn} {...props}>
      Add
      <img className={styles.btn__img} src={plus} alt="Plus Img" />
    </button>
  );
};

export default Button;
