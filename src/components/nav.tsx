import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import Clipboard from './clipboard';

enum NavLinkType {
	home = '/',
	projects = '/projects',
	contact = '/contact',
}

function Nav() {
	const [isOpen, setOpen] = useState(false)
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

	const onToggle = () => setOpen((prev) => !prev);

	const onClick = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement;

    	if (target.tagName === 'A') {
			setOpen(false);
		}
	}

	return (
		<>
			<div className='md:hidden z-50'>
				<Hamburger toggled={isOpen} toggle={onToggle} />
			</div>
			<nav className={`absolute bg-white h-screen 
			left-0 top-0 gap-7 items-center flex-col justify-center 
			flex overflow-hidden duration-500 text-5xl font-semibold
			${isOpen ? 'w-screen' : 'w-0'}
			${isOpen ? 'translate-x-0' : 'translate-x-[100vw]'} 
			md:duration-0 md:h-full md:static md:translate-x-0 md:flex-row 
			md:flex md:w-full md:text-base md:gap-3`}
			onClick={onClick}
			>
				<Link to={NavLinkType.home} 
					className={styles[NavLinkType.home]}>
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

				<div className="block mt-10 text-xl md:hidden">
					<Clipboard>alexmakondev@gmail.com</Clipboard>
				</div>
			</nav>
		</>
	)
}

export default Nav