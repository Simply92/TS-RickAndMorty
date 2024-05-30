import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="flex w-full h-14 flex-row p-2 items-center">
            <Link className="" to='/home'>Home</Link>
            <Link to='/favorites'>Favoritos</Link>
            <Link to='/'>Cerrar sesión</Link>
            <button>Personaje Random</button>
        </div>
    )
}

export default NavBar
