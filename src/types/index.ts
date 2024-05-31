import { z } from "zod"
import { CharacterAPI, CharactersAPI } from "../utils"

export type Character = z.infer<typeof CharacterAPI>
export type Characters = z.infer<typeof CharactersAPI>