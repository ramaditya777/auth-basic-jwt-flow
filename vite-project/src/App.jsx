import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/NavBar";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Home from "../components/pages/Home";
import About from "../components/pages/About";

const App = () => {
  // ✅ Initialize state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("token");
  });

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;

// isLoggedIn is now React state

// Login → setIsLoggedIn(true) → re-render

// Logout → setIsLoggedIn(false) → re-render

// Navbar + Routes update instantly

// 🔥 This is how real apps do it (before Context).
