import { useContext } from "react"
import { authContext } from "../AuthContext/AuthContext.jsx"

export const useAuthProvider = () => {
    if(!authContext) throw new Error("useAuthProvider must be used within a AuthProvider")
    return useContext(authContext)
}