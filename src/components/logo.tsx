import React from 'react'

interface LogoProps {
    children: React.ReactNode
}

function Logo(props: LogoProps) {
    return (
        <div className='uppercase text-2xl font-bold'>{props.children}</div>
    )
}

export default Logo