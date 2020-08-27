import React from 'react';
import styles from './Contact.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contact = () => {
    return (
        <div className={styles.contactBlock}>
            <div className= {`${styleContainer.container} ${styles.contactContainer}`}>
                <h2 className={styles.title}>Contact</h2>
                <form className={styles.form} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <button className={styles.button}>Send message</button>
            </div>
        </div>
    )
}