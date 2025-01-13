import { Link, useLocation } from 'react-router-dom'

enum NavLinkType {
	home = '/',
	projects = '/projects',
	contact = '/contact',
}

function Nav() {
	const activeLinkStyle = 'border-b-2 border-black duration-300';
	const inactiveLinkStyle = 'border-b-2 border-transparent duration-300';

	const pathname = useLocation().pathname;

	const styles = {
		[NavLinkType.home]: pathname === NavLinkType.home 
			? activeLinkStyle : inactiveLinkStyle,
		[NavLinkType.projects]: pathname === NavLinkType.projects 
			? activeLinkStyle : inactiveLinkStyle,
		[NavLinkType.contact]: pathname === NavLinkType.contact 
			? activeLinkStyle : inactiveLinkStyle,
	}

	return (
		<nav className='flex gap-3 items-center uppercase font-semibold h-full'>
			<Link to={NavLinkType.home} className={styles[NavLinkType.home]}>
				Home
			</Link>
			<Link 
				to={NavLinkType.projects} 
				className={styles[NavLinkType.projects]}
			>
				Projects
			</Link>
			<Link 
				to={NavLinkType.contact} 
				className={styles[NavLinkType.contact]}
			>
				Contact
			</Link>
		</nav>
	)
}

export default Nav