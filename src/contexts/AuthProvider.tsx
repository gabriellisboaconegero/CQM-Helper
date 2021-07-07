import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
  name: string;
  email: string;
  id: string;
} | null | undefined

type AuthContext = {
  user: User;
  signInWithGoogle(): Promise<firebase.auth.UserCredential>;
  signOut(): void;
}

export const authContext = createContext({} as AuthContext);
export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(changedUser => {
      setUser(parseUser(changedUser));
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  function parseUser(user: firebase.User | null): User | null{
    if (!user) return user;
    if (!user.displayName || !user.email){
      console.log("Falta noma ou email");
      return null;
    }
    return {
      name: user.displayName,
      email: user.email,
      id: user.uid
    }
  }

  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  }

  function signOut(){
    auth.signOut();
  }

  return(
    <authContext.Provider value={{user, signOut, signInWithGoogle}}>
      {!loading? children : <p>Loading...</p> }
    </authContext.Provider>
  );
}