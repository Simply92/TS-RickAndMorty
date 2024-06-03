import { StateCreator } from "zustand";
import { FavChar } from "../types";
import { deleteFav, postFav } from "../services";
import { Toast } from "../utils/toast";


export type FavoriteSliceType = {
    favorite: FavChar[]
    addFav: (character: FavChar) => Promise<void>
    removeFav: (id: number) => Promise<void>
    loadStorage: () => void
}

export const createFavoriteSlice: StateCreator<FavoriteSliceType> = (set, get) => ({
    favorite: [] as FavChar[],
    addFav: async (character) => {
        const fav = await postFav(character)
        if (fav) {
            set(() => ({
                favorite: fav
            }))
            Toast.fire({
                icon: "success",
                title: "Se agrego correctamente a favoritos"
            })
        }
        localStorage.setItem('favoritos', JSON.stringify(get().favorite))
    },
    removeFav: async (id) => {
        const fav = await deleteFav(id)
        if (fav) {
            set(() => ({
                favorite: fav
            }))
            Toast.fire({
                icon: "error",
                title: "Se eliminó correctamente a favoritos"
            })
        }
        localStorage.setItem('favoritos', JSON.stringify(get().favorite))
    },
    loadStorage: () => {
        const storeFavorite = localStorage.getItem('favoritos')
        if (storeFavorite) {
            set({
                favorite: JSON.parse(storeFavorite)
            })
        }
    }

})