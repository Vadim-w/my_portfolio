import React from 'react';
import styles from './SocialNetwork.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type SocialNetworkPropsType = {
    icon: any
}

export const SocialNetwork = (props: SocialNetworkPropsType) => {
    return (
        <div className={styles.socialNetwork}>
            <FontAwesomeIcon icon={props.icon} size={"7x"} color={"white"}/>
        </div>
    )
}