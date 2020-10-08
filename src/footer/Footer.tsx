import React from 'react';
import styles from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {SocialNetwork} from "./SocialNetwork";
import {Title} from "../common/components/title/Title";
import {faInstagram, faLinkedin, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";

type footerPropsType = {}

export const Footer = (props: footerPropsType) => {

    return (
        <div className={styles.footerBlock}>
            <div className= {`${styleContainer.container} ${styles.footerContainer}`}>
                <Title title={"Vadim Morozov"}/>
                <div className={styles.socialNetworks}>
                    <SocialNetwork icon={faVk}/>
                    <SocialNetwork icon={faLinkedin}/>
                    <SocialNetwork icon={faTelegram}/>
                    <SocialNetwork icon={faInstagram}/>
                </div>
                <div className={styles.copyright}> © 2020 Все права защищены</div>
            </div>
        </div>
    )
}