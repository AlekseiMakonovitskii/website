import React from 'react'
import styles from './container.module.scss'

interface ContainerProps {
    children: React.ReactNode
}

function Container(props: ContainerProps) {
    const { children } = props;

    return (
        <div className={styles.container}>{children}</div>
    )
}

export default Container