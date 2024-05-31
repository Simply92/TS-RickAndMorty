import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CharacterSliceType, createCharacterSlice } from "./CharacterSlice";

export const useAppStore = create<CharacterSliceType>()(devtools((...a) => ({
    ...createCharacterSlice(...a),
})))