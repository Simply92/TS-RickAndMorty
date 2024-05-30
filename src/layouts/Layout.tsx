import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {
    return (
        <>
            <header className="bg-slate-800">
                <NavBar />
            </header>
            <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow">
                <Outlet />
            </main>

        </>
    )
}

export default Layout