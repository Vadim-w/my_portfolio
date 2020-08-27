import React from 'react';
import styles from './Nav.module.css'

export const Nav = () => {
    return(
        <div className={styles.nav}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    )
}