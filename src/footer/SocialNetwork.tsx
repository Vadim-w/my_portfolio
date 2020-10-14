import React from 'react';
import styles from './SocialNetwork.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type SocialNetworkPropsType = {
    icon: any
    link: string
}

export const SocialNetwork = (props: SocialNetworkPropsType) => {
    return (
        <div className={styles.socialNetwork}>
            <a href={props.link} target='_blank'>
                <FontAwesomeIcon
                    icon={props.icon}
                    size={"7x"}
                    color={"white"}/>
            </a>
        </div>
    )
}