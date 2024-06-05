import { useEffect, useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import Card from "./Card"


const FavoriteChar = () => {
    const { favorite, user, getFav } = useAppStore()
    const hasFavorites = useMemo(() => favorite.length, [favorite])
    console.log(favorite)

    useEffect(() => {
        if (user) {
            (getFav(user));
        }
    }, []);

    return (
        <>
            {hasFavorites ? (
                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8 p-10 justify-center'>
                    {favorite.map(character => (
                        <Card
                            key={+character.id}
                            character={character}
                        />
                    ))}
                </div>) : (
                <p className="my-10 text-center text-2xl">Los favoritos se mostrarán aquí</p>
            )}
        </>
    )
}

export default FavoriteChar
