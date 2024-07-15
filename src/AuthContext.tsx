import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, User } from "firebase/auth";

interface AuthProviderProps {
    children: ReactNode;
  }
  
  interface AuthContextType {
    currentUser: User | null;
    loading: boolean;
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within and AuthProvider")
    }
    return context;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    return (
        <AuthContext.Provider value={{ currentUser, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
