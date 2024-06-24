import EmptyList from "../UI/EmptyList/EmptyList";
import ItemLi from "../UI/ItemLi/ItemLi";
import Counter from "../Counter/Counter";
import Form from "../Form/Form";
import styles from "./CardInner.module.css";
import { monthsData } from "../../Utils/date/getCurrentDate";

interface ICardInner {
  data: monthsData;
}

const CardInner = ({ data }: ICardInner) => {
  const completedTodos = data?.todos?.length
    ? data?.todos?.filter((todo) => todo.completed === true)?.length
    : 0;

  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
      <Form monthId={data.id} task={data.todos} />
      <div className="counters">
        <Counter text="Created tasks" color={"#4EA8DE"} task={data.todos} />
        <Counter
          text="Completed"
          color={"#8284FA"}
          task={data.todos}
          ofs={"out of"}
          completed={completedTodos ?? 0}
        />
      </div>

      {data?.todos?.length ? (
        data.todos.map((el) => {
          return (
            <ItemLi
              key={el.id}
              id={el.id}
              task={el.taskValue}
              monthId={data.id}
              data={el}
            />
          );
        })
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default CardInner;
