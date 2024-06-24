import { useEffect, useState, useContext } from "react";
import { getCurrentWeek } from "../../Utils/date/getCurrentDate";
import styles from "./Calendar.module.css";
import CalendarItem from "../UI/CalendarItem/CalendarItem";
import { weekDays } from "../../Utils/date/dateHelpers";
import { getApiData } from "../../Utils/api/getApiData";
import { TodoContext } from "../../Provider/ContentProvider";

const Calendar = () => {
  const { items, setTodoItems } = useContext(TodoContext);
  const [dayOff, setDayOff] = useState("");

  useEffect(() => {
    getApiData(new Date().getFullYear(), items.currentMonth).then((data) => {
      setDayOff(data as string);
    });
  }, [items.currentMonth]);

  return (
    <section>
      <div className={styles.monthPicker}>
        <div>
          <button
            onClick={() => setTodoItems(getCurrentWeek(items.currentMonth - 1))}
            className={`${styles.button} ${styles.left}`}
          >
            left
          </button>
          {items.monthName}
          <button
            onClick={() => setTodoItems(getCurrentWeek(items.currentMonth + 1))}
            className={`${styles.button} ${styles.right}`}
          >
            right
          </button>
        </div>
      </div>
      <ul className={`${styles.wrapper} ${styles.weekDays}`}>
        {weekDays.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className={`${styles.wrapper} ${styles.calendar}`}>
        {items.monthsData[items.monthName]?.data?.map((day) => {
          return (
            <CalendarItem
              key={`calendarItem${day.id}`}
              startWith={items.startWith}
              data={day}
              dayOff={dayOff[day.id]}
              currentDay={items.currentDay}
            >
              {day.monthDay}
            </CalendarItem>
          );
        })}
      </div>
    </section>
  );
};

export default Calendar;
