import { HandlerEvent, tasksType } from "../../Types/types";
import { FormTypes } from "../../Types/types";
import Input from "../UI/Input/Input";
import { InputEvent } from "../../Types/types";
import Button from "../UI/Button/Button";
import styles from "./Form.module.css";
import { useContext, useState } from "react";
import { TodoContext } from "../../Provider/ContentProvider";

const Form = ({ task, monthId }: FormTypes) => {
  const [input, setInput] = useState<string>("");
  const { addItem } = useContext(TodoContext);
  const HandleSubmit = (ev: HandlerEvent) => {
    ev.preventDefault();

    const lastElementId = task.length ? task[task.length - 1].id : 0;
    const newTask: tasksType = {
      id: lastElementId + 1,
      taskValue: input,
      completed: false,
    };

    addItem(monthId, newTask);
    setInput("");
  };

  return (
    <form className={styles.form}>
      <Input
        style={{ marginRight: "2rem" }}
        value={input}
        onChange={(e: InputEvent) => setInput(e.currentTarget.value)}
        type="text"
        placeholder="Add a new task"
      />
      <Button onClick={HandleSubmit} />
    </form>
  );
};

export default Form;
