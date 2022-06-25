import { auth } from "../firebase/firebase";
import { useState, useContext, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

const AuthContext = createContext({
  user: null,
  signIn: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  loading: false,
  error: "",
});

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
   
      } else {
        setUser(null);
        setLoading(true)
        setError(error);
      }
      setLoading(false);
    });
  }, [auth]);

  const signIn = async (email, password) => {
    setLoading(true);
    setError("");
    await signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        setUser(credentials.user);
        setLoading(false);
        toast.success('Login Successesful', {
          duration: 3000,
          position: 'bottom-center',
          })
      })
      .catch((error) => {
        setError(error.message);
        toast.error('Wrong Credentials, no user exists', {
          duration: 3000,
          position: 'bottom-center',
          })
      
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signUp = async (email, password, username) => {
    setLoading(true);
    setError("");
    await createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        updateProfile(credentials.user, {
          displayName: username,
        });
        setUser(credentials.user);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        toast.error('Wrong Credentials', {
          duration: 3000,
          position: 'bottom-center',
          })
      })
      .finally(() => {
        setLoading(false);
        setError(error);
      });
  };

  const logout = async () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        logout,
        signUp,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
