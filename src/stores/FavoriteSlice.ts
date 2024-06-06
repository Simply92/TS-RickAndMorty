import { StateCreator } from "zustand";
import { FavChar, User } from "../types";
import { deleteFav, getFavorite, postFav } from "../services";
import { Toast } from "../utils/toast";


export type FavoriteSliceType = {
    favorite: FavChar[]
    allCharacter: FavChar[]
    addFav: (character: FavChar, user: User) => void
    removeFav: (id: number, user: User) => Promise<void>
    getFav: (user: User) => Promise<void>
    filter: (value: string) => void
    order: (value: string) => void
    reset: () => void
    loadStorage: () => void
}

export const createFavoriteSlice: StateCreator<FavoriteSliceType> = (set, get) => ({
    favorite: [] as FavChar[],
    allCharacter: [] as FavChar[],
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
                favorite: fav,
                allCharacter: fav
            }))
        }
        localStorage.setItem('favoritos', JSON.stringify(get().favorite))
    },
    removeFav: async (id, user) => {
        const fav = await deleteFav(id, user)
        if (fav) {
            set(() => ({
                favorite: fav,
                allCharacter: fav
            }))
            Toast.fire({
                icon: "error",
                title: "Se eliminó correctamente a favoritos"
            })
        }
        localStorage.setItem('favoritos', JSON.stringify(get().favorite))
    },
    filter: (value) => {
        if (value) {
            set((state) => ({
                favorite: state.allCharacter.filter((char) => char.gender === value)
            }))
        }
    },
    order: (value) => {
        if (value) {
            set((state) => {
                const sortFavortites = [...state.allCharacter]
                sortFavortites.sort((a, b) =>
                    value === "A" ? a.id - b.id : b.id - a.id
                )
                return {
                    favorite: sortFavortites
                }
            })
        }
    },
    reset: () => {
        set((state) => ({
            favorite: state.allCharacter
        }))
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