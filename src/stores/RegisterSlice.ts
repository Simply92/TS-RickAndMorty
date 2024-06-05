import { StateCreator } from "zustand";
import { Register } from "../types";
import { register } from "../services";
import { Toast } from "../utils/toast";


export type RegisterSliceType = {
    complete: boolean
    postForm: (formData: Register) => void
}

export const createRegisterSlice: StateCreator<RegisterSliceType> = (set) => ({
    complete: false,
    postForm: async (formData) => {
        const newUser = await register(formData)
        if (newUser) {
            Toast.fire({
                title: "Usuario creado exitosamente!",
                icon: "success"
            })
            set(() => ({
                complete: true
            }))
        } else {
            Toast.fire({
                title: "Error al crear usuario",
                icon: "error"
            })
        }
    }
})
