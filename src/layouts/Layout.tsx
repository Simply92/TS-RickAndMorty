import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Search from "../components/Search"

const Layout = () => {
    return (
        <>
            <header className="flex flex-row bg-lime-600">
                <NavBar />
                <Search />
            </header>
            <main>
                <Outlet />
            </main>

        </>
    )
}

export default Layout