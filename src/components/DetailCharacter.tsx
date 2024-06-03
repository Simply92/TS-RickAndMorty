import { useParams } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";


const DetailCharacter = () => {
    const { id: paramId } = useParams<{ id: string }>();
    const { characterId, characterById } = useAppStore();

    useEffect(() => {
        if (paramId) {
            characterById(+paramId)
        }
    }, [paramId, characterById]);

    if (!characterId) {
        return <div>Loading...</div>;
    }

    const { status, image, name, species, gender, id, origin, location } = characterId;

    return (
        <div className="flex flex-row mt-20 items-center justify-center gap-40">
            <div className="text-lg text-white font-bold">
                <h2>Id: {id}</h2>
                <h2>Nombre: {name}</h2>
                <h2>Especie: {species}</h2>
                <h2>Género: {gender}</h2>
                <h2>Estado: {status}</h2>
                <h2>Origen: {origin?.name}</h2>
                <h2>Ubicación: {location?.name}</h2>
            </div>
            <div className="">
                <img className="" src={image} alt="" />
            </div>
        </div>
    )
}

export default DetailCharacter

