import { StateCreator } from "zustand";
import { User } from "../types";
import { login } from "../services";
import { Toast } from "../utils/toast";

export type UserSliceType = {
    user: User | null
    status: boolean
    userLogin: (userData: User) => Promise<void>
    loguot: () => void
    localLogin: () => void
}

export const createUserSlice: StateCreator<UserSliceType> = (set, get) => ({
    user: null,
    status: false,
    userLogin: async (userData) => {
        const newUser = await login(userData)
        if (newUser.access === true) {
            set(() => ({
                status: true,
                user: userData
            }))
            Toast.fire({
                title: "Bienvenido",
                icon: "success"
            })
            localStorage.setItem('user', JSON.stringify(get().user))
        } else {
            if (newUser.info === 'User not found') {
                Toast.fire({
                    title: "El usuario no existe",
                    icon: "error"
                })
            } else {
                Toast.fire({
                    title: "Contraseña incorrecta",
                    icon: "error"
                })
            }
            set(() => ({
                status: false
            }))
        }
    },
    loguot: () => {
        set(() => ({
            status: false,
            user: null
        }))
        Toast.fire({
            title: "Sesión finalizada",
            icon: "info"
        })
    },
    localLogin: () => {
        const storeLogin = localStorage.getItem('user')
        if (storeLogin) {
            set({
                user: JSON.parse(storeLogin)
            })
        }
    }
})