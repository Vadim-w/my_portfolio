import React from 'react';
import styles from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {SocialNetwork} from "./SocialNetwork";

type footerPropsType = {

}

export const Footer = (props: footerPropsType) => {
    return (
        <div className={styles.footerBlock}>
            <div className= {`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Vadim Morozov</h2>
                <div className={styles.socialNetworks}>
                    <SocialNetwork/>
                    <SocialNetwork/>
                    <SocialNetwork/>
                </div>
                <div className={styles.copyright}> © 2020 Все права защищены</div>
            </div>
        </div>
    )
}