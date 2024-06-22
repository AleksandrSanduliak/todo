import { TodoContext } from "../../../Provider/ContentProvider";
import { TTodos } from "../../../Utils/date/getCurrentDate";
import garbage from "./garbage.svg";
import styles from "./ItemLi.module.css";
import { useContext } from "react";

interface IList {
  id: number;
  task: string;
  monthId: number;
  data: TTodos;
}

const ItemLi = ({ id, task, monthId, data }: IList) => {
  const { completeTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className={styles.list__wrapper}>
      <span
        onClick={() => {
          completeTodo(monthId, id);
        }}
        className={`${styles.cirle__list}
          ${data.completed ? styles.circle__active : null}`}
      ></span>
      <span
        className={`${styles.list__item}
        ${data.completed ? styles.list__active : null}`}
      >
        {task}
      </span>
      <span
        onClick={() => deleteTodo(monthId, id)}
        className={styles.delete__wrap}
      >
        <img className={styles.delete} src={garbage} alt="Delete Icon" />
      </span>
    </div>
  );
};

export default ItemLi;
