import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/configuracion'

export const AuthContexto = createContext()

export const AuthContextoProveedor = ({children}) => {

    const [user, setUser] = useState ({
        logged: false,
        email: null
    })

    console.log(user)

    const login = (values) => {
        setUser ({
            logged: true,
            email: values.email
        })
    }

    const register = (values) => {
        createUserWithEmailAndPassword (auth, values.email, values.password)
        .then ((userCredential) => {
            const user = userCredential.user

            setUser ({
                logged: true,
                email: user.email
            })
        })
    }

    return(
        <AuthContexto.Provider value={{user, login, register}}>
            {children}
        </AuthContexto.Provider>
    )
}