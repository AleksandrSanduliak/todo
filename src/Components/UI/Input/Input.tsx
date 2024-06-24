import styles from "./Input.module.css";
const Input = ({ ...props }): JSX.Element => {
  return <input required className={styles.input} {...props}></input>;
};

export default Input;
