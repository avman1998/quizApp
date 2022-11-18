import { useState,useEffect,useContext,createContext } from "react";
import { 
    getAuth, 
    signInWithRedirect, 
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged  } from "firebase/auth";
import {auth} from './firebase';
const AuthContext=createContext();
export  function AuthProvider({children}){

    // State for user
   const [user,setUser]=useState({})

   //Setup for Google Sign
    const googleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    } 
    
    //Setup for Google Signout
    const logout=()=>{
        signOut(auth);
    }

    // Checking if new user or already signed in ?
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
        });
        return ()=>{unsubscribe();}
    },[]) 


    return(
        <AuthContext.Provider value={{googleSignIn,logout,user}}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth(){
    return useContext(AuthContext);
}