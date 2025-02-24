import React from 'react'
import NavItem from './nav-item'

function NavItems() {
    return (
        <>
            <NavItem href='/'>Home</NavItem>
            <NavItem href='/projects'>Projects</NavItem>
            <NavItem href='/contact'>Contact</NavItem>
        </>
    )
}

export default NavItems