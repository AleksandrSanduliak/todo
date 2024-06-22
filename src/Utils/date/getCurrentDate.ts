import { weekDays } from "./dateHelpers";

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type TTodos = {
  id: number;
  taskValue: string;
  completed: boolean;
};

export type monthsData = {
  id: number;
  date: string;
  todos: TTodos[];
  monthDay: number;
};

export interface IMonthData {
  currentMonth: number;
  daysOfMonth: number;
  monthName: string;
  monthsData: monthsData[];
}

export const getCurrentWeek = () => {
  const year = new Date().getFullYear();
  const currentDay = new Date().getDate();
  const currentMonth: number = new Date().getMonth() + 1;
  const daysOfMonth: number = new Date(year, currentMonth, 0).getDate();

  const numWithLeadingZero = (num: number) => (num >= 10 ? num : "0" + num);
  const monthDateType = numWithLeadingZero(currentMonth);

  const monthName = months[currentMonth];

  const monthsData = [];

  for (let i = 0; i < daysOfMonth; i++) {
    let currentDay = numWithLeadingZero(i + 1);
    const dayOfWeek = new Date(
      `${year}-${monthDateType}-${currentDay}`
    ).getDay();

    monthsData.push({
      id: i,
      date: `${year}-${monthDateType}-${currentDay}`,
      todos: [{ id: 1, taskValue: "Call to Father", completed: false }],
      dayOfWeek: weekDays[dayOfWeek],
      dayOfWeekNumber: dayOfWeek,
      monthDay: i + 1,
    });
  }

  return {
    currentMonth,
    daysOfMonth,
    monthName,
    monthsData: {
      [monthName]: {
        data: monthsData,
      },
    },
    startWith: monthsData[0]?.dayOfWeekNumber,
    currentDay,
  };
};
