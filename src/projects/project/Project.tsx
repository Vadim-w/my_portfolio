import React from 'react';
import styles from './Project.module.css'

type projectPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
}

export const Project = (props: projectPropsType) => {
    return (
        <div className={styles.project} >
            <div className={styles.icon} style={props.style}>
                <button className={styles.button}>Смотреть</button>
            </div>
            <div className={styles.projectDescription}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            </div>
        </div>
    )
}