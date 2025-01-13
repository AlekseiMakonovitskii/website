import Clipboard from "../components/clipboard"
import { Container } from "../core/container"
import Logo from "../components/logo"
import Nav from "../components/nav"

function Header() {
	return (
		<header className="border-b-2 p-5">
			<Container>
				<div className="flex items-center justify-between gap-1 h-full">
					<Logo />
					<Nav />
					<Clipboard>alexmakondev@gmail.com</Clipboard>
				</div>
			</Container>
		</header>
	)
}

export default Header