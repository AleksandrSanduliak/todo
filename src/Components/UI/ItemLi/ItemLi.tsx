import { HandlerEvent } from "../../../Types/types";
import garbage from "./garbage.svg";
import styles from "./ItemLi.module.css";
import { useState } from "react";
import React from "react";
interface List {
  key: string | number;
  indx: number | string;
  task: string;
  deleting: any;
  add: any;
  del: any;
}

const ItemLi = ({ ...props }: List) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const Complete = React.useCallback(
    (e: HandlerEvent) => {
      setIsClicked(!isClicked);
      isClicked === false ? props.add() : props.del();
    },
    [isClicked, props]
  );
  const garbageClick = () => {
    props.deleting(props.indx);
  };
  return (
    <div className={styles.list__wrapper} key={props.key}>
      <span
        onClick={Complete}
        className={[
          styles.cirle__list,
          isClicked ? styles.circle__active : null,
        ].join(" ")}
      ></span>
      <span
        className={[
          styles.list__item,
          isClicked ? styles.list__active : null,
        ].join(" ")}
      >
        {props.indx}
        {props.task}
      </span>
      <span onClick={garbageClick} className={styles.delete__wrap}>
        <img className={styles.delete} src={garbage} alt="Delete Icon" />
      </span>
    </div>
  );
};

export default ItemLi;
