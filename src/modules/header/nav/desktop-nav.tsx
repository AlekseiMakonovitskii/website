import React from 'react'
import NavItems from './nav-items'
import styles from './nav.module.scss'

function DesktopNav() {
    return (
        <div className={styles.desktop_nav}>
            <NavItems />
        </div>
    )
}

export default DesktopNav