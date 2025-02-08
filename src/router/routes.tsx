import ContactPage from "../pages/contact";
import HomePage from "../pages/home";
import ProjectsPage from "../pages/projects";
import { RouteType } from "./types";

export const ROUTES: RouteType[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/projects',
        element: <ProjectsPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
];
