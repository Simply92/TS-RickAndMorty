import { StateCreator } from "zustand"
import { getCharacter } from "../services"
import { Character } from "../types"
import { Toast } from "../utils/toast"

export type CharacterSliceType = {
    characters: Character[]
    characterId: Character | null
    fetchCharacter: (id: number) => Promise<void>
    characterExist: (id: number) => boolean
    onClose: (id: number) => void
    characterById: (id: number) => Promise<void>
}

export const createCharacterSlice: StateCreator<CharacterSliceType> = (set, get) => ({
    characters: [] as Character[],
    characterId: null,
    fetchCharacter: async (id) => {
        const newCharacter = await getCharacter(id)
        if (newCharacter) {
            if (get().characterExist(id)) {
                Toast.fire({
                    title: "El personaje esta repetido",
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
    characterById: async (id) => {
        const newCharacter = await getCharacter(id)
        if (newCharacter) {
            set(() => ({
                characterId: newCharacter
            }))
        }
    },
    onClose: (id) => {
        set((state) => ({
            characters: state.characters.filter(character => character.id !== id)
        }))
    }
})