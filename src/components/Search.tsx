import { ChangeEvent, FormEvent, useState } from "react";
import { useAppStore } from "../stores/useAppStore";


const Search = () => {

    const { fetchCharacter } = useAppStore()
    const [id, setId] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        setId(input)
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        fetchCharacter(+id)
        setId("")
    };
    return (
        <form className="flex items-center flex-row w-1/4 justify-evenly" onSubmit={handleSubmit}>
            <input
                type='search'
                placeholder='Ingresa el id'
                value={id}
                onChange={handleChange}
                className=" bg-antiquewhite rounded-md px-2 h-8 text-lg" />
            <button
                type="submit"
                className="bg-yellow-400 rounded-md w-36 h-8 flex items-center justify-center text-lg font-bold border-2 border-black cursor-pinter uppercase"
            >Agregar
            </button>
        </form>
    )
}

export default Search
