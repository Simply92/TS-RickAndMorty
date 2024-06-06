import { ChangeEvent, useEffect, useMemo, useState } from "react"
import { useAppStore } from "../stores/useAppStore"
import Card from "./Card"


const FavoriteChar = () => {
    const { favorite, user, getFav, order, filter, reset } = useAppStore()
    const hasFavorites = useMemo(() => favorite.length, [favorite])
    const [opcion1, setOpcion1] = useState("");
    const [opcion2, setOpcion2] = useState("");


    useEffect(() => {
        if (user) {
            getFav(user);
        }
    }, []);

    const handleOrder = (e: ChangeEvent<HTMLSelectElement>) => {
        order(e.target.value);
        setOpcion1(e.target.value);
    };

    const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        filter(e.target.value);
        setOpcion2(e.target.value);
    };

    const handleReset = () => {
        reset();
        setOpcion1("");
        setOpcion2("");
    };

    return (
        <>
            <div className="mt-14 flex justify-evenly items-center font-bold text-xl text-black">
                <select
                    value={opcion1}
                    className="px-2 rounded-md cursor-pointer bg-antiquewhite text-center"
                    onChange={handleOrder}
                >
                    <option value="" disabled>
                        Selecciona una opción
                    </option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select
                    value={opcion2}
                    className="px-2 rounded-md cursor-pointer bg-antiquewhite text-center"
                    onChange={handleFilter}
                >
                    <option value="" disabled>
                        Selecciona una opción
                    </option>
                    <option value="Male">Hombre</option>
                    <option value="Female">Mujer</option>
                    <option value="Genderless">Sin género</option>
                    <option value="unknown">Desconocido</option>
                </select>
                <button className="text-center uppercase px-2 bg-red-600 cursor-pointer rounded-sm" onClick={handleReset}>
                    Eliminar filtros
                </button>
            </div>
            {hasFavorites ? (
                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8 p-10 justify-center'>
                    {favorite.map(character => (
                        <Card
                            key={+character.id}
                            character={character}
                        />
                    ))}
                </div>) : (
                <p className="my-10 text-center text-2xl text-white">Los favoritos se mostrarán aquí</p>
            )}
        </>
    )
}

export default FavoriteChar
