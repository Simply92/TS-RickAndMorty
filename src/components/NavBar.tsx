import { Link } from "react-router-dom"

const NavBar = () => {

    const buttomNormal = "bg-yellow-400 rounded-md w-36 h-8 flex items-center justify-center text-lg font-bold border-2 border-black cursor-pinter uppercase"
    return (
        <div className="flex w-3/4 h-14 flex-row p-2 items-center justify-evenly">
            <Link className={buttomNormal} to='/home'>Home</Link>
            <Link className={buttomNormal} to='/favorites'>Favoritos</Link>
            <Link
                className="text-lg font-bold bg- rounded-md w-36 h-8 flex items-center justify-center 
                border-2 border-black bg-red-600 uppercase cursor-pointer" to='/'>
                Cerrar sesión
            </Link>
            <button className={`${buttomNormal} `}>Random</button>
        </div>
    )
}

export default NavBar
