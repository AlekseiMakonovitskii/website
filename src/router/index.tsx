import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import ProjectsPage from '../pages/projects';
import ContactPage from '../pages/contact';

function Router() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/projects' element={<ProjectsPage />} />
			<Route path='/contact' element={<ContactPage />} />
		</Routes>
	)
}

export default Router