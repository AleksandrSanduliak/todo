// import React from 'react';
import styles from './EmptyList.module.css'
import img from './Clipboard.svg'
const EmptyList = () => {
    return (
        <div className={styles.Empty}>
            <img className={styles.img} src={img} alt="EmptyList img" />
            <span className="text__top">You don't have tasks registered yet</span>
            {/* <br/> */}
            <span className="text__bottom">Create tasks and organize your to-do items</span>
        </div>
    );
};

export default EmptyList;