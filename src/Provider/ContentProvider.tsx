import { createContext, useState } from "react";
import {
  Items,
  TTodos,
  getCurrentWeek,
  monthsData,
} from "../Utils/date/getCurrentDate";
import { tasksType } from "../Types/types";

export const TodoContext = createContext({
  items: {} as Items,
  addItem: (monthId: number, item: tasksType) => {},
  deleteTodo: (monthId: number, id: number) => {},
  completeTodo: (monthId: number, id: number) => {},
  setTodoItems: (items: Items) => {},
});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoItems, setTodoItems] = useState(getCurrentWeek());

  const addItem = (monthId: number, item: tasksType) => {
    const newTodoItem = structuredClone(todoItems);
    const findItem = newTodoItem.monthsData[todoItems.monthName].data.filter(
      (item: monthsData) => item.id === monthId
    );

    const day = {
      ...findItem[0],
      todos: [...findItem[0].todos],
    };
    day.todos.push({ ...item });

    newTodoItem.monthsData[todoItems.monthName].data[monthId] = day;

    const month = {
      [todoItems.monthName]: {
        data: [...newTodoItem.monthsData[todoItems.monthName].data],
      },
    };

    setTodoItems({ ...newTodoItem, ...month });
  };

  const deleteTodo = (monthId: number, id: number) => {
    const newTodoItem = structuredClone(todoItems);
    const currentMonthTodosData =
      newTodoItem.monthsData[todoItems.monthName].data[monthId].todos;

    const findItem = currentMonthTodosData.filter(
      (item: TTodos) => item.id !== id
    );

    const changedTodoData = (newTodoItem.monthsData[todoItems.monthName].data[
      monthId
    ].todos = findItem);

    const day = {
      ...newTodoItem.monthsData[todoItems.monthName].data[monthId],
      todos: changedTodoData,
    };

    newTodoItem.monthsData[todoItems.monthName].data[monthId] = day;
    const month = {
      [todoItems.monthName]: {
        data: [...newTodoItem.monthsData[todoItems.monthName].data],
      },
    };

    setTodoItems({ ...newTodoItem, ...month });
  };

  const completeTodo = (monthId: number, id: number) => {
    const newTodoItem = structuredClone(todoItems);
    const currentMonthTodosData =
      newTodoItem.monthsData[todoItems.monthName].data[monthId].todos;
    const findTodo = currentMonthTodosData.filter(
      (item: TTodos) => item.id === id
    );

    const competedTodo = { ...findTodo[0], completed: !findTodo[0].completed };
    const findIndexFn = (item) => item.id === id;
    const findingIndex = currentMonthTodosData.findIndex(findIndexFn);
    currentMonthTodosData[findingIndex] = competedTodo;

    const day = {
      ...newTodoItem.monthsData[todoItems.monthName].data[monthId],
      todos: [...currentMonthTodosData],
    };

    newTodoItem.monthsData[todoItems.monthName].data[monthId] = day;
    const month = {
      [todoItems.monthName]: {
        data: [...newTodoItem.monthsData[todoItems.monthName].data],
      },
    };

    setTodoItems({ ...newTodoItem, ...month });
  };

  return (
    <TodoContext.Provider
      value={{
        items: todoItems,
        addItem,
        deleteTodo,
        completeTodo,
        setTodoItems,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
