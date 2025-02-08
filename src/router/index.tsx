import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./routes"

function Router() {
    return (
        <Routes>
            {ROUTES.map((route) => <Route {...route} key={route.path} />)}
        </Routes>
    )
}

export default Router