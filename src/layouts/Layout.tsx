import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Search from "../components/Search"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"

const Layout = () => {
    const { loadStorage, status } = useAppStore()
    console.log(status)

    useEffect(() => {
        loadStorage()
    }, [])
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