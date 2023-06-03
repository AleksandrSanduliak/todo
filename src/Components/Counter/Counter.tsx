// import { CSSProperties } from "react";
import styles from './Counter.module.css';
import { tasksType } from "../../Types/types";
interface CounterTypes {
    text:string,
    color:any,
    task: tasksType[],
    ofs?:string,
    completed?:number,
}

const Counter = ({color,text, task, ofs, completed}:CounterTypes) => {
    return (
        <p className={styles.Counter} style={{color:color}}>
            <span className={styles.counter__text}>{text}</span>
            <span className={styles.circle__counter}>{task.length} {ofs} {completed}</span>
        </p>
    );
};

export default Counter;