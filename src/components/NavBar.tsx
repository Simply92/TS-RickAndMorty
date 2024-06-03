import { Link, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

const NavBar = () => {
    const { fetchCharacter } = useAppStore()
    const { pathname } = useLocation()

    const randomCharacter = Math.floor(Math.random() * 826) + 1

    const buttonNormal = `rounded-md w-36 h-8 flex items-center justify-center text-lg font-bold border-2 border-black cursor-pinter uppercase`
    const buttonActive = `${buttonNormal} bg-black text-yellow-400`
    const buttonNoActive = `${buttonNormal} bg-yellow-400 text-black`

    return (
        <div className="flex w-3/4 h-14 flex-row p-2 items-center justify-evenly">
            <Link className={pathname === '/home' ? buttonActive : buttonNoActive} to='/home'>Home</Link>
            <Link className={pathname === '/favorites' ? buttonActive : buttonNoActive} to='/favorites'>Favoritos</Link>
            <Link
                className="text-lg font-bold bg- rounded-md w-36 h-8 flex items-center justify-center 
                border-2 border-black bg-red-600 uppercase cursor-pointer" to='/'>
                Cerrar sesión
            </Link>
            <button onClick={() => fetchCharacter(randomCharacter)} className={buttonNoActive}>Random</button>
        </div>
    )
}

export default NavBar
