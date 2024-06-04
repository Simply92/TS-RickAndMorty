import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CharacterSliceType, createCharacterSlice } from "./CharacterSlice";
import { FavoriteSliceType, createFavoriteSlice } from "./FavoriteSlice";
import { UserSliceType, createUserSlice } from "./LoginSlice";

export const useAppStore = create<CharacterSliceType & FavoriteSliceType & UserSliceType>()(devtools((...a) => ({
    ...createCharacterSlice(...a),
    ...createFavoriteSlice(...a),
    ...createUserSlice(...a),
})))