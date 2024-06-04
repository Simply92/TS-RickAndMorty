import { StateCreator } from "zustand";
import { User } from "../types";
import { login } from "../services";
import { Toast } from "../utils/toast";

export type UserSliceType = {
    user: User | null
    status: boolean
    userLogin: (userData: User) => Promise<void>
}

export const createUserSlice: StateCreator<UserSliceType> = (set) => ({
    user: null,
    status: false,
    userLogin: async (userData) => {
        const newUser = await login(userData)
        if (newUser) {
            set(() => ({
                status: true
            }))
            Toast.fire({
                title: "Bienvenido",
                icon: "success"
            })
        } else {
            Toast.fire({
                title: "Datos incorrectos",
                icon: "error"
            })
        }
    }
})