import { z } from "zod"

export const CharacterAPI = z.object({
    id: z.number(),
    name: z.string(),
    species: z.string(),
    origin: z.object({
        name: z.string(),
        url: z.string()
    }),
    image: z.string(),
    gender: z.string(),
    status: z.string()
})

export const CharactersAPI = z.object({
    characters: z.array(CharacterAPI)
})