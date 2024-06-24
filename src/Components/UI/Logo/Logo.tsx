import logo from "./rocket.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img className={styles.logo__img} src={logo} alt="Logo ToDo" />
      <div className={styles.logo__text}>
        <span className={styles.logo__tblue}>to</span>
        <span className={styles.logo__tpurple}>do</span>
      </div>
    </div>
  );
};

export default Logo;
