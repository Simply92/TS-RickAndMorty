import axios from "axios";
import { Character, FavChar } from "../types";
import { CharacterAPI, CharactersFav } from "../utils";
const url = import.meta.env.VITE_BACK_URL

export const getCharacter = async (id: Character['id']) => {
    const { data } = await axios.get(`${url}/rickandmorty/character/${id}`)
    const result = CharacterAPI.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export const postFav = async (character: FavChar) => {
    const endpoint = `${url}/rickandmorty/fav`
    const { data } = await axios.post(endpoint, character)
    const result = CharactersFav.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export const deleteFav = async (id: Character['id']) => {
    const endpoint = `${url}/rickandmorty/fav/${id}`
    const { data } = await axios.delete(endpoint)
    console.log(data)
    const result = CharactersFav.safeParse(data)
    console.log(result)
    if (result.success) {
        return result.data
    }
}