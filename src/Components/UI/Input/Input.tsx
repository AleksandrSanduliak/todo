import React from 'react';
import styles from './Input.module.css';
const Input = ({...props}) => {
    return (
        <input required className={styles.input} {...props}></input>
    );
};

export default Input;