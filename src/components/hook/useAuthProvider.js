import { useContext } from "react"
import { AuthContext } from "../AuthContext/AuthContext.jsx"

export const useAuthProvider = () => {
    if(!AuthContext) throw new Error("useAuthProvider must be used within a AuthProvider")
    return useContext(AuthContext)
}