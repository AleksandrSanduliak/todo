import {useCallback} from 'react';
import { HandlerEvent, tasksType } from '../../Types/types';
import { FormTypes } from '../../Types/types';
import Input from '../UI/Input/Input';
import { InputEvent } from '../../Types/types';
import Button from '../UI/Button/Button';
import styles from './Form.module.css';
const Form = ({task, input, setInput, create, setTask}:FormTypes) => {
    const HandleSubmit = useCallback((ev:HandlerEvent) => {
        ev.preventDefault()
        const newTask: tasksType = {id:task.length+1, taskValue:input,}
        create(newTask)
        setInput('')
    }, [create])
    return (
    <form className={styles.form}>
        <Input style={{marginRight: '2rem'}} value={input} onChange={(e:InputEvent)=> setInput(e.currentTarget.value)} type="text" placeholder='Add a new task'/>
        <Button onClick={HandleSubmit}/>
    </form>
    );
};

export default Form;