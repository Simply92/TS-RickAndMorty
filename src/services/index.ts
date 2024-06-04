import axios from "axios";
import { Character, FavChar, User } from "../types";
import { CharacterAPI, CharactersFav, UserData } from "../utils";
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
    const result = CharactersFav.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export const login = async (userData: User) => {
    UserData.parse(userData)
    const endpoint = `${url}/rickandmorty/login`;
    const { data } = await axios.post(endpoint, userData)
    const { access } = data
    return access
}