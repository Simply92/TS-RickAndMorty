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
        <form onSubmit={handleSubmit}>
            <input
                type='search'
                placeholder='Enter id'
                value={id}
                onChange={handleChange}
                className="" />
            <button type="submit" className="">Agregar</button>
        </form>
    )
}

export default Search
