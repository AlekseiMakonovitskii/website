import React from 'react'

interface ButtonProps {
	children: React.ReactNode
	classNames?: string
	onClick?: () => void
}

function Button(props: ButtonProps) {
	const { children, classNames} = props;

	return (
		<button 
			className={
				`bg-gray-200 p-3 rounded-lg cursor-pointer ${classNames || ''}`
			}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button