import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CharacterSliceType, createCharacterSlice } from "./CharacterSlice";
import { FavoriteSliceType, createFavoriteSlice } from "./FavoriteSlice";
import { UserSliceType, createUserSlice } from "./LoginSlice";
import { RegisterSliceType, createRegisterSlice } from "./RegisterSlice";

export const useAppStore = create<CharacterSliceType & FavoriteSliceType & UserSliceType & RegisterSliceType>()(devtools((...a) => ({
    ...createCharacterSlice(...a),
    ...createFavoriteSlice(...a),
    ...createUserSlice(...a),
    ...createRegisterSlice(...a)
})))