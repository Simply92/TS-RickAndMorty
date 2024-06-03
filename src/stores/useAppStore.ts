import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CharacterSliceType, createCharacterSlice } from "./CharacterSlice";
import { FavoriteSliceType, createFavoriteSlice } from "./FavoriteSlice";

export const useAppStore = create<CharacterSliceType & FavoriteSliceType>()(devtools((...a) => ({
    ...createCharacterSlice(...a),
    ...createFavoriteSlice(...a),
})))