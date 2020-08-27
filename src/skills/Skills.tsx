import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className= {`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"HTML CSS"} description={"Lorem ipsum dolor sit amet," +
                    "consectetur adipisicing elit. Architecto,doloremque esse excepturi illo ipsam modi"
                      }/>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet," +
                    "consectetur adipisicing elit. Architecto,doloremque esse excepturi illo ipsam modi"
                    }/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet," +
                    "consectetur adipisicing elit. Architecto,doloremque esse excepturi illo ipsam modi"
                    }/>
                </div>
            </div>
        </div>
    )
}