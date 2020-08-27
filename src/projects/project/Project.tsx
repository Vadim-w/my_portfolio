import React from 'react';
import styles from './Project.module.css'

type projectPropsType = {
    title: string
    description: string
}

export const Project = (props: projectPropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.icon}>
                <button className={styles.button}>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    )
}