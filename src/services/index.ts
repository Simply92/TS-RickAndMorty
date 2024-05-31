import axios from "axios";
import { Character } from "../types";
import { CharacterAPI } from "../utils";
const url = import.meta.env.VITE_BACK_URL

export const getCharacter = async (id: Character['id']) => {
    const { data } = await axios.get(`${url}/rickandmorty/character/${id}`)
    const result = CharacterAPI.safeParse(data)
    if (result.success) {
        return result.data
    }
}