import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F6FFE7]/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
        <img src={logo} alt="NoeNoe Logo" className="w-16 h-16 object-contain" />
        <span className="text-xl font-bold text-white hidden sm:inline"></span>
        </Link>
        <div className="space-x-6">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "text-black" : "text-gray-700"
            } hover:text-[#1E3A2E] font-medium`}
          >
            Home
          </Link>
    
              <Link
                to="/upload"
                className={`${
                  location.pathname === "/upload" ? "text-black" : "text-gray-700"
                } hover:text-[#1E3A2E] font-medium`}
              >
                Upload
              </Link>
              <Link
                to="/dashboard"
                className={`${
                  location.pathname === "/dashboard" ? "text-black" : "text-gray-700"
                } hover:text-[#1E3A2E] font-medium`}
              >
                Dashboard
              </Link>
              <Link
                to="/badges"
                className={`${
                  location.pathname === "/badges" ? "text-black" : "text-gray-700"
                } hover:text-[#1E3A2E] font-medium`}
              >
                Badges
              </Link>
              <Link
                to="/my-items"
                className={`${
                  location.pathname === "/my-items" ? "text-black" : "text-gray-700"
                } hover:text-[#1E3A2E] font-medium`}
              >
                My Items
              </Link>

              {user ? (
            <>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className={`${
                location.pathname === "/login" ? "text-blue-600" : "text-gray-700"
              } hover:text-[#1E3A2E] font-medium`}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
