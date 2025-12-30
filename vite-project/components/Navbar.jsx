import { Link } from "react-router-dom";
import { useAuth } from "../src/hooks/useAuth.js";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-blue-600">AuthApp</h1>

        <div className="space-x-6">
          {isLoggedIn ? (
            <>
              <Link to="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
              <button
                onClick={logout}
                className="text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-blue-600">
                Login
              </Link>
              <Link to="/signup" className="text-gray-600 hover:text-blue-600">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//Old one
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="w-full bg-white border-b shadow-sm">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold text-blue-600">
//           AuthApp
//         </Link>

//         <div className="flex items-center gap-6">
//           {isLoggedIn ? (
//             <>
//               <Link to="/" className="text-gray-600 hover:text-blue-600">
//                 Home
//               </Link>
//               <Link to="/about" className="text-gray-600 hover:text-blue-600">
//                 About
//               </Link>
//               {/* <Link to="/" className="text-gray-600 hover:text-blue-600">
//                 Home
//               </Link> */}

//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="text-gray-600 hover:text-blue-600">
//                 Login
//               </Link>

//               <Link
//                 to="/signup"
//                 className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700"
//               >
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
