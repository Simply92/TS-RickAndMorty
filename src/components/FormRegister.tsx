import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";


const FormRegister = () => {
    const { postForm, complete } = useAppStore()
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postForm(formData)
        if (complete) {
            navigate("/")
        }
    };
    const handleGoBack = () => {
        navigate("/");
    };

    const label = "text-xl text-white mt-3 font-semibold"
    const input = "p-1 border-none text-lg font-semibold text-black w-[400px] rounded-md bg-[rgb(250,325,215)]"
    const button = "mx-8 my-4 text-center text-lg font-semibold bg-blue-700 text-white rounded-md px-2"
    return (
        <div className="mt-40 flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-[rgba(0,0,0,0.7)] flex text-center items-center flex-col w-1/2 py-16">
                <label className={label}>Nombre:</label>
                <input
                    className={input}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label className={label}>Apellido:</label>
                <input
                    className={input}
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                />
                <label className={label}>Email:</label>
                <input
                    className={input}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label className={label}>Contraseña:</label>
                <input
                    className={input}
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <div className="flex">
                    <button className={button}>Registrarse</button>
                    <button className={button} onClick={handleGoBack}>Volver al Login</button>
                </div>
            </form >
        </div >
    );
}

export default FormRegister
