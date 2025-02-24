'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavItemProps {
    href: string
    children: React.ReactNode
}

function NavItem(props: NavItemProps) {
    const { href, children } = props;

    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link href={href}>
            <Button variant={isActive ? 'default' : 'ghost'}>{children}</Button>
        </Link>
    )
}

export default NavItem