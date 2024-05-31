import { StateCreator } from "zustand"
import { getCharacter } from "../services"
import { Character } from "../types"

export type CharacterSliceType = {
    characters: Character[]
    fetchCharacter: (id: number) => Promise<void>
}

export const createCharacterSlice: StateCreator<CharacterSliceType> = (set) => ({
    characters: [] as Character[],
    fetchCharacter: async (id) => {
        const character = await getCharacter(id)
        if (character) {
            set((state) => ({
                characters: [...state.characters, character]
            }))
        }
    }
})