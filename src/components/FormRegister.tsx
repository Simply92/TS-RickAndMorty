import { useNavigate } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { Register } from "../types";

const FormRegister = () => {
    const { postForm, complete } = useAppStore()
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Register>()

    const post = async (formData: Register) => {
        await postForm(formData)
        if (complete) {
            navigate("/")
        }
        reset()
    };
    const handleGoBack = () => {
        navigate("/");
    };

    const label = "text-2xl text-white mt-3 font-semibold"
    const input = "text-2xl p-1 bg-antiquewhite border-none font-semibold text-black w-[400px] rounded-md"
    const button = "text-2xl uppercase my-3 text-center font-semibold bg-green rounded-md px-2"
    return (
        <div className="mt-40 flex justify-center">
            <form
                noValidate
                onSubmit={handleSubmit(post)}
                className="bg-[rgba(0,0,0,0.7)] flex text-center items-center flex-col w-1/2 py-16">
                <label htmlFor="name" className={label}>Nombre:</label>
                <input
                    className={input}
                    type="text"
                    id="name"
                    {...register('name', {
                        required: 'El nombre es obligatorio'
                    })}
                />
                {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
                <label className={label}>Apellido:</label>
                <input
                    className={input}
                    type="text"
                    id="lastname"
                    {...register('lastname', {
                        required: 'El apellido es obligatorio'
                    })}
                />
                {errors.lastname && (
                    <ErrorMessage>{errors.lastname.message}</ErrorMessage>
                )}
                <label className={label}>Email:</label>
                <input
                    className={input}
                    type="email"
                    id="email"
                    {...register('email', {
                        required: 'El correo es obligatorio'
                    })}
                />
                {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
                <label className={label}>Contraseña:</label>
                <input
                    className={input}
                    type="password"
                    id="password"
                    {...register('password', {
                        required: 'La contraseña es obligatoria'
                    })}
                />
                {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}

                <button type="submit" className={button}>Registrarse</button>
                <button className={button} onClick={handleGoBack}>Volver al Login</button>
            </form >

        </div >
    );
}

export default FormRegister
