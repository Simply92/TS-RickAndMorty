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

export const postFav = async (character: FavChar, user: User) => {
    const { email } = user
    const endpoint = `${url}/rickandmorty/fav`
    const { data } = await axios.post(endpoint, { character, email })
    const result = CharactersFav.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export const getFavorite = async (user: User) => {
    const { email } = user
    const endpoint = `${url}/rickandmorty/getFav/${email}`
    const { data } = await axios(endpoint)
    const result = CharactersFav.safeParse(data)
    if (result.success) {
        return result.data
    }
}

export const deleteFav = async (id: Character['id'], user: User) => {
    const { email } = user
    const endpoint = `${url}/rickandmorty/fav/${id}?user=${email}`
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