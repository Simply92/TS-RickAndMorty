import { StateCreator } from "zustand"
import { getCharacter } from "../services"
import { Character } from "../types"
import Swal from "sweetalert2"

export type CharacterSliceType = {
    characters: Character[]
    fetchCharacter: (id: number) => Promise<void>
    characterExist: (id: number) => boolean
    onClose: (id: number) => void
}

export const createCharacterSlice: StateCreator<CharacterSliceType> = (set, get) => ({
    characters: [] as Character[],
    fetchCharacter: async (id) => {
        const newCharacter = await getCharacter(id)
        if (newCharacter) {
            if (get().characterExist(id)) {
                Swal.fire({
                    title: "Error",
                    text: "El personaje esta repetido",
                    icon: "warning"
                });
            } else {
                set((state) => ({
                    characters: [...state.characters, newCharacter]
                }))
            }
        }
    },
    characterExist: (id) => {
        return get().characters.some(character => character.id === id)
    },
    onClose: (id) => {
        set((state) => ({
            characters: state.characters.filter(character => character.id !== id)
        }))
    }
})