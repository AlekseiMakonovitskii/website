import React from 'react'
import styles from '../header.module.scss'
import Link from 'next/link';

interface LogoProps {
    children: React.ReactNode
    href?: string
}

const defaultHref = '/';

function Logo(props: LogoProps) {
    const { children, href } = props;

    return (
        <Link href={href || defaultHref}>
            <div className={styles.logo}>{children}</div>
        </Link>
    )
}

export default Logo