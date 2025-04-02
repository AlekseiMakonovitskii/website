import React from 'react'

interface WrapperProps {
    children: React.ReactNode
}

function Wrapper(props: WrapperProps) {
    return (
        <div className='p-3 md:p-5'>{props.children}</div>
    )
}

export default Wrapper