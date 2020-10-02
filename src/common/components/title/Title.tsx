import React from 'react';
import styles from './Title.module.scss'

type titlePropsType = {
    title: string
}

export const Title = (props: titlePropsType) => {
    return (
        <div className={styles.titleBlock}>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    )
}