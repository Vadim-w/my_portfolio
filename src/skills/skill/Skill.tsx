import React from 'react';
import styles from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type skillPropsType = {
    title: string
    description: string
    icon: any

}

export const Skill = (props: skillPropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={props.icon} size={"5x"}  color={"#ff4a57"}/>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}