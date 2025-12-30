import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    setupAutoLogout(token);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Auto logout function
  const setupAutoLogout = (token) => {
    const expiry = getTokenExpiry(token);
    if (!expiry) return;

    const timeout = expiry - Date.now();
    if (timeout <= 0) {
      logout();
    } else {
      setTimeout(() => logout(), timeout);
    }
  };

  // Run once on mount to check token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setupAutoLogout(token);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Decode JWT
const getTokenExpiry = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000; // convert seconds → ms
  } catch {
    return null;
  }
};
