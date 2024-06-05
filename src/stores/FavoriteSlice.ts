import { StateCreator } from "zustand";
import { FavChar, User } from "../types";
import { deleteFav, getFavorite, postFav } from "../services";
import { Toast } from "../utils/toast";


export type FavoriteSliceType = {
    favorite: FavChar[]
    addFav: (character: FavChar, user: User) => void
    removeFav: (id: number, user: User) => Promise<void>
    getFav: (user: User) => Promise<void>
    loadStorage: () => void
}

export const createFavoriteSlice: StateCreator<FavoriteSliceType> = (set, get) => ({
    favorite: [] as FavChar[],
    addFav: async (character, user) => {
        const fav = await postFav(character, user)
        if (fav) {
            Toast.fire({
                icon: "success",
                title: "Se agrego correctamente a favoritos"
            })
        }
    },
    getFav: async (user) => {
        const fav = await getFavorite(user)
        if (fav) {
            set(() => ({
                favorite: fav
            }))
        }
        localStorage.setItem('favoritos', JSON.stringify(get().favorite))
    },
    removeFav: async (id, user) => {
        const fav = await deleteFav(id, user)
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