import React from 'react';
import styles from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import {SocialNetwork} from "./SocialNetwork";
import {Title} from "../common/components/title/Title";
import {faInstagram, faLinkedin, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <Title title={"I'm on social networks"}/>
                <div className={styles.socialNetworks}>
                    <SocialNetwork link={'https://vk.com/n077rm'} icon={faVk}/>
                    <SocialNetwork link={'https://www.linkedin.com/in/vadim-morozov-aa3a051b7/'} icon={faLinkedin}/>
                    <SocialNetwork link={'https://t.me/VadimDev'} icon={faTelegram}/>
                    <SocialNetwork link={'https://www.instagram.com/morozowwadim/'} icon={faInstagram}/>
                </div>
                <div className={styles.copyright}> © 2020 All Rights Reserved by.</div>
            </div>
        </div>
    )
}