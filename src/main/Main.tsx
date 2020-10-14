import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.scss'
import todoImage from '../assets/image/Ava.jpg';


export const Main = () => {

    const todoListStyle = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={styles.mainBlock} id='home'>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                <div className={styles.text}>
                    <h1>I am Vadim Morozov</h1>
                    <p>i'm Vadim, professional Frontend developer</p>
                </div>
                <div className={styles.photo} style={todoListStyle}></div>
            </div>
        </div>
    )
}