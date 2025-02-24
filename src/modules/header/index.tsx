import Container from '@/components/container'
import React from 'react'
import Logo from './components/logo'
import styles from './header.module.scss'
import Nav from './nav'
import Copy from './components/copy'

const email = 'alexmakondev@gmail.com';

function Header() {
    return (
        <header>
            <Container>
                <div className={styles.header}>
                    <Logo>A.Makonovitskii</Logo>
                    <Nav />
                    <div className={styles.header_third_section}>
                        <Copy text={email}>{email}</Copy>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header