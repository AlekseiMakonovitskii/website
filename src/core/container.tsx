interface ContainerProps {
	children: React.ReactNode
}

function Container(props: ContainerProps) {
	return (
		<div className="p-1 max-w-[1400px] mx-auto">{props.children}</div>
	)
}

export {
	Container,
}