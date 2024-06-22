import { createContext, useState } from "react";
import {
  TTodos,
  getCurrentWeek,
  monthsData,
} from "../Utils/date/getCurrentDate";
import { tasksType } from "../Types/types";

export type TItems = {
  [key: string]: {
    data: monthsData[];
  };
};

export const TodoContext = createContext({
  items: {} as TItems,
  addItem: (monthId: number, item: tasksType) => {},
  deleteTodo: (monthId: number, id: number) => {},
  completeTodo: (monthId: number, id: number) => {},
});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const currentWeek = getCurrentWeek();

  const [todoItems, setTodoItems] = useState(currentWeek.monthsData);

  const addItem = (monthId: number, item: tasksType) => {
    const newTodoItem = structuredClone(todoItems);
    const findItem = newTodoItem[currentWeek.monthName].data.filter(
      (item: monthsData) => item.id === monthId
    );

    const day = {
      ...findItem[0],
      todos: [...findItem[0].todos],
    };
    day.todos.push({ ...item });

    newTodoItem[currentWeek.monthName].data[monthId] = day;

    const month = {
      [currentWeek.monthName]: {
        data: [...newTodoItem[currentWeek.monthName].data],
      },
    };

    setTodoItems({ ...newTodoItem, ...month });
  };

  const deleteTodo = (monthId: number, id: number) => {
    const newTodoItem = structuredClone(todoItems);
    const currentMonthTodosData =
      newTodoItem[currentWeek.monthName].data[monthId].todos;

    const findItem = currentMonthTodosData.filter(
      (item: TTodos) => item.id !== id
    );

    const changedTodoData = (newTodoItem[currentWeek.monthName].data[
      monthId
    ].todos = findItem);

    const day = {
      ...newTodoItem[currentWeek.monthName].data[monthId],
      todos: changedTodoData,
    };

    newTodoItem[currentWeek.monthName].data[monthId] = day;
    const month = {
      [currentWeek.monthName]: {
        data: [...newTodoItem[currentWeek.monthName].data],
      },
    };

    setTodoItems({ ...newTodoItem, ...month });
  };

  const completeTodo = (monthId: number, id: number) => {
    const newTodoItem = structuredClone(todoItems);
    const currentMonthTodosData =
      newTodoItem[currentWeek.monthName].data[monthId].todos;
    const findTodo = currentMonthTodosData.filter(
      (item: TTodos) => item.id === id
    );

    const competedTodo = { ...findTodo[0], completed: !findTodo.completed };

    currentMonthTodosData[id - 1] = competedTodo;

    const day = {
      ...newTodoItem[currentWeek.monthName].data[monthId],
      todos: [...currentMonthTodosData],
    };

    newTodoItem[currentWeek.monthName].data[monthId] = day;
    const month = {
      [currentWeek.monthName]: {
        data: [...newTodoItem[currentWeek.monthName].data],
      },
    };

    setTodoItems({ ...newTodoItem, ...month });
  };

  return (
    <TodoContext.Provider
      value={{ items: todoItems, addItem, deleteTodo, completeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
