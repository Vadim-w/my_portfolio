import React from 'react';
import styles from './Header.module.scss'
import {Nav} from "../nav/Nav";

export const Header = () => {
    return(
        <div className={styles.header}>
            <Nav/>
        </div>
    )
}