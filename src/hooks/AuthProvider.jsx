import React, { useState, useEffect, createContext, useContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";
import Modal from "react-modal";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLoggedIn") === "true");
  const navigate = useNavigate();

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
    setIsOfflineModalOpen(true);
  };

  const handleCloseOfflineModal = () => {
    setIsOfflineModalOpen(false);
  };

  const clearError = () => {
    setError(null);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (email, password) => {
    if (!isValidEmail(email)) {
      setError("Invalid email address");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("User logged in.");
    } catch (error) {
      console.error("Error during login:", error.code, error.message);
      setError(error.message);
	  if (!error){
		navigate("/home");
		//clearError();
	}
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await setPersistence(auth, browserSessionPersistence);
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user);
      setError(null);
    } catch (error) {
      console.error("Error during Google login:", error);
      setError(error.message);
	  if (!error){
		navigate("/home");
		//clearError();
	}
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("isLoggedIn");
      console.log("User logged out.");
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (email, password) => {
    if (!isValidEmail(email)) {
      setError("Invalid email address");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("User registered:", user);
      setIsRegistered(true);
    } catch (error) {
      console.error("Error during signup:", error.code, error.message);
      setError(error.message);
	  if (!error){
		navigate("/home");
		//clearError();
	}
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            setIsLogged(true);
            localStorage.setItem("isLoggedIn", "true");
          } else {
            setUser(null);
            setIsLogged(false);
            localStorage.removeItem("isLoggedIn");
          }
          setLoadingInitial(false);
        });

        const localLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (localLoggedIn) {
          setUser(true);
          setIsLogged(true);
        }
      })
      .catch((error) => {
        console.error("Error setting session persistence:", error);
      });

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [auth]);

  const contextValue = {
    loading,
    user,
    isLogged,
    error,
    isRegistered,
    handleSignup,
    handleLogin,
    handleLogout,
    handleGoogleLogin,
    clearError,
  };

  if (loadingInitial) {
    return <LoadingAnimation />;
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
      <Modal
        isOpen={isOfflineModalOpen}
        ariaHideApp={false}
        onRequestClose={handleCloseOfflineModal}
        className="flex rounded-xl p-2 bg-gradient-to-br from-blue-700 to-purple-700 bg-cover items-center justify-center h-screen"
      >
        <div className="p-2 m-20 text-center text-white">
          <p>You are currently offline. Some features may be limited.</p>
          <button
            className="w-full p-2 mt-20 bg-slate-900 text-white rounded-lg shadow-lg hover:bg-slate-700"
            onClick={handleCloseOfflineModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth, AuthContext };
