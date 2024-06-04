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
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        userLogin(userData)
    }
    useEffect(() => {
        status && navigate('/home');
    }, [status]);
    return (
        <div>
            <form onSubmit={handleSubmit} className="" action="">
                <img className="" src="/imagenLogin.jpg" alt="Imagen Login" />
                <label htmlFor="email">E-mail</label>
                <input
                    value={userData.email}
                    type="email"
                    onChange={handleChange}
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    value={userData.password}
                    type="password"
                    onChange={handleChange}
                    name="password"
                />
                <button>Login</button>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
            </form>
        </div>
    )
}

export default Login
