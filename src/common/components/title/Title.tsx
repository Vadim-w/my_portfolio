import React from 'react';
import styles from './Title.module.css'

type titlePropsType = {
    title: string
}

export const Title = (props: titlePropsType) => {
    return (
        <div className={styles.title}>
            <h2>{props.title}</h2>
        </div>
    )
}