import React from 'react';
import styles from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <nav>
                <a href='#home'>Home</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
        </div>
    )
}
