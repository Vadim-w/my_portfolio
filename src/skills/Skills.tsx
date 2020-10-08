import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {
    faCss3Alt,
    faGithub,
    faGithubAlt,
    faHtml5,
    faInstagram,
    faJs, faLinkedin,
    faReact, faVk
} from "@fortawesome/free-brands-svg-icons";
import {faAd, faAsterisk, faCoffee} from '@fortawesome/free-solid-svg-icons'

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className= {`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={styles.skills}>
                    <Skill
                        icon={faHtml5}
                        title={"HTML"}
                           description={"Lorem ipsum dolor sit amet," +
                    "consectetur adipisicing elit. Architecto,doloremque esse excepturi illo ipsam modi"
                      }/>
                    <Skill
                        icon={faCss3Alt}
                        title={"CSS"}
                        description={"Lorem ipsum dolor sit amet," +
                        "consectetur adipisicing elit. Architecto,doloremque esse excepturi illo ipsam modi"
                        }/>
                    <Skill
                        icon={faJs}
                        title={"JavaScript"}
                           description={"Lorem ipsum dolor sit amet," +
                    "consectetur adipisicing elit. Architecto,doloremque esse excepturi illo ipsam modi"
                    }/>
                    <Skill
                        icon={faReact}
                        title={"ReactJS"}
                           description={"Lorem ipsum dolor sit amet," +
                    "consectetur adipisicing elit. Architecto,doloremque esse excepturi illo ipsam modi"
                    }/>
                    <Skill
                        icon={faGithub}
                        title={"GitHub"}
                        description={"Lorem ipsum dolor sit amet,"
                        }/>
                </div>
            </div>
        </div>
    )
}