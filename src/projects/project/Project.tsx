import React from 'react';
import styles from './Project.module.scss'

type projectPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
    link: string
}

export const Project = (props: projectPropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.icon} style={props.style}>
                <a target='_blank'   href={props.link} className={styles.button}>Look</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <p className={styles.projectDescription}>{props.description}</p>
            </div>
        </div>
    )
}