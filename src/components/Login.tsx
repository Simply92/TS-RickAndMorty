import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";


const Login = () => {
    const { userLogin, status } = useAppStore()
    const navigate = useNavigate()
    const [userData, setuserData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setuserData({ ...userData, [event.target.name]: event.target.value })

    };
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await userLogin(userData)
        setuserData({
            email: "",
            password: ""
        })
    }
    useEffect(() => {
        status && navigate('/home');
    }, [status]);

    const label = "text-white my-4"
    const input = "bg-antiquewhite rounded-md w-96 px-2 p-1 justify-center"
    const button = "mt-4 rounded-md text-center mt-2 bg-green uppercase px-2"

    return (
        <div className="text-2xl flex justify-center font-semibold">
            <form
                onSubmit={handleSubmit}
                className="bg-[rgba(0,0,0,0.7)] flex flex-col text-center items-center w-1/2 p-10">
                <img
                    className="mt-8 rounded-full w-80"
                    src="/imagenLogin.jpg"
                    alt="Imagen Login" />
                <label
                    htmlFor="email"
                    className={label}
                >Correo</label>
                <input
                    value={userData.email}
                    type="email"
                    onChange={handleChange}
                    name="email"
                    className={input}
                />
                <label
                    htmlFor="password"
                    className={label}
                >Contraseña</label>
                <input
                    value={userData.password}
                    type="password"
                    onChange={handleChange}
                    name="password"
                    className={input}
                />
                <button className={button}>Iniciar sesión</button>
                <Link to='/register'>
                    <button className={button}>Registrarse</button>
                </Link>
            </form>
        </div>
    )
}

export default Login
