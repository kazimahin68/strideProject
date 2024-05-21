import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.config";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(" ");
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            return unsubscribe;
        }
    }, [])
    const authInfo = {
        user,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthProvider;