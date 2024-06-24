import React, { useState } from "react";
import styles from "./CalendarItem.module.css";
import { monthsData } from "../../../Utils/date/getCurrentDate";
import Modal from "../Modal/Modal";
import CardInner from "../../CardInner/CardInner";

interface CalendarItem {
  children: React.ReactNode;
  data: monthsData;
  startWith: number;
  dayOff: string;
  currentDay: number;
}

const CalendarItem = ({
  children,
  data,
  startWith,
  dayOff,
  currentDay,
}: CalendarItem) => {
  const [showModal, setIsShowModal] = useState(false);
  const gridStartWith = { gridColumnStart: data.id === 0 ? startWith : "" };
  const dayOffStatus = { color: dayOff === "1" ? "red" : "" };
  const currentDayStatus = currentDay === data.id + 1 ? styles.currentDay : "";
  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsShowModal(false);
    e.stopPropagation();
  };

  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsShowModal((prev) => !prev);
        e.stopPropagation();
      }}
      className={`${styles.wrapper} ${currentDayStatus}`}
      style={{ ...gridStartWith, ...dayOffStatus }}
    >
      <span className={styles.number}>{children}</span>
      {showModal && (
        <Modal onClose={closeModal}>
          <CardInner data={data} />
        </Modal>
      )}
    </div>
  );
};

export default CalendarItem;
