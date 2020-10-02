import React from 'react';
import styles from './Project.module.scss'

type projectPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
}

export const Project = (props: projectPropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.icon} style={props.style}>
                <button className={styles.button}>Look</button>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <p className={styles.projectDescription}>{props.description}</p>
            </div>
        </div>
    )
}