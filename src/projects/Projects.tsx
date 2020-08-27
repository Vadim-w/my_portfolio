import React from 'react';
import styles from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                <Project title={"TodoList"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad inventore iste laudantium magni mollitia nobis praesentium, soluta voluptate? A assumenda, corporis deleniti harum iusto labore nulla perspiciatis qui quia veritatis?"
                }/>
                <Project title={"Social Network"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad inventore iste laudantium magni mollitia nobis praesentium, soluta voluptate? A assumenda, corporis deleniti harum iusto labore nulla perspiciatis qui quia veritatis?"
                }/>
                <Project title={"Counter"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad inventore iste laudantium magni mollitia nobis praesentium, soluta voluptate? A assumenda, corporis deleniti harum iusto labore nulla perspiciatis qui quia veritatis?"
                }/>
                </div>
            </div>
        </div>
    )
}