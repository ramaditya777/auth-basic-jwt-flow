import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  // ✅ Initialize state from Context;
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/" /> : <Signup />}
        />
        {/* Protected route */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />{" "}
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;

// ✅ App now depends on AuthContext, not props or localStorage.

//Old

// isLoggedIn is now React state
// Login → setIsLoggedIn(true) → re-render
// Logout → setIsLoggedIn(false) → re-render
// Navbar + Routes update instantly
// 🔥 This is how real apps do it (before Context).
