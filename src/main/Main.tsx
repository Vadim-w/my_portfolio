import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>I am Vadim Morozov</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={styles.photo}> me photo</div>

            </div>
        </div>
    )
}