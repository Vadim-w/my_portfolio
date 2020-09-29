import React from 'react';
import styles from './Contact.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Contact = () => {
    return (
        <div className={styles.contactBlock}>
            <div className= {`${styleContainer.container} ${styles.contactContainer}`}>
                {/*<h2 className={styles.title}>Contact</h2>*/}
                <Title title={"Contact"}/>
                <form className={styles.form} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <button className={styles.button} type="submit">Send message</button>
            </div>
        </div>
    )
}