import React from 'react';
import styles from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from '../common/components/title/Title'
import todoImage from '../assets/image/to-do-list-vector-2471089.jpg'
import socialImage from '../assets/image/preview-563cf163-2aac-41ac-be0c-7a010a141f38-UqPnD.png'

export const Projects = () => {
    const todoListStyle = {
        backgroundImage: `url(${todoImage})`
    }
    const socialNetworkStyle = {
        backgroundImage: `url(${socialImage})`
    }
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={styles.projects}>
                    <Project
                        link={'https://github.com/Vadim-w/TodoList'}
                        title={"TodoList"}
                        style={todoListStyle}
                        description={" nobis pra corporis deleniis qui quia veritatis?"
                        }/>
                    <Project
                        link={'https://github.com/Vadim-w/SocialNetwork'}
                        title={"Social Network"}
                        style={socialNetworkStyle}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad inventore iste laudantium magni mollitia nobis praesentium, soluta voluptate? A assumenda, corporis deleniti harum iusto labore nulla perspiciatis qui quia veritatis?"
                        }/>
                </div>
            </div>
        </div>
    )
}