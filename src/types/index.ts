import { z } from "zod"
import { CharacterAPI, CharacterFav, CharactersAPI, CharactersFav } from "../utils"

export type Character = z.infer<typeof CharacterAPI>
export type Characters = z.infer<typeof CharactersAPI>
export type FavChar = z.infer<typeof CharacterFav>
export type FavChars = z.infer<typeof CharactersFav>