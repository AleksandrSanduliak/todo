import { useEffect, useState, useContext } from "react";
import { getCurrentWeek } from "../../Utils/date/getCurrentDate";
import styles from "./Calendar.module.css";
import CalendarItem from "../UI/CalendarItem/CalendarItem";
import { weekDays } from "../../Utils/date/dateHelpers";
import { getApiData } from "../../Utils/api/getApiData";
import { TodoContext } from "../../Provider/ContentProvider";

const Calendar = () => {
  const getDate = getCurrentWeek();
  const { items } = useContext(TodoContext);

  const [dayOff, setDayOff] = useState("");
  const [currentMonth, setCurrentMonth] = useState(getDate.monthName);

  useEffect(() => {
    getApiData(new Date().getFullYear(), getDate.currentMonth).then((data) => {
      setDayOff(data as string);
    });
  }, [getDate.currentMonth]);

  return (
    <section>
      <ul className={`${styles.wrapper} ${styles.weekDays}`}>
        {weekDays.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className={`${styles.wrapper} ${styles.calendar}`}>
        {items[currentMonth]?.data?.map((day) => {
          return (
            <CalendarItem
              key={`calendarItem${day.id}`}
              startWith={getDate.startWith}
              data={day}
              dayOff={dayOff[day.id]}
              currentDay={getDate.currentDay}
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
