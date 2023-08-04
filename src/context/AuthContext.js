import React, { createContext, useReducer, useContext } from 'react'

const AuthContext = createContext()
const initialState = {
    isAuthenticated: false
}

const reducer = ((state, { type }) => {
    switch (type) {
        case "SET_LOGGED_IN":
            return { isAuthenticated: true }
        case "SET_LOGGED_OUT":
            return { isAuthenticated: false }
        default:
            state
            break;
    }
})


export default function AuthContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)

}