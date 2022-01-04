import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const AuthContext = createContext()

const EntryProvider = ({children}) => {
    const auth = localStorage.getItem('token')
    const [token, setToken] = useState(auth)
    const navigate= useNavigate()

    const handleLogin = (age) => {
        if (age >= 18) {
            setToken("admited")
            localStorage.setItem('token', JSON.stringify("admited"))
            navigate('/disco')
        }
    }







    return (
        <AuthContext.Provider value={{ token, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export default EntryProvider
