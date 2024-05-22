import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase.config";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(" ");
    const [loading, setLoading] = useState(false);
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };

    const logOut = () =>{
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])
    const authInfo = {
        user,
        loading,
        googleLogin,
        logOut
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