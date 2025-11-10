import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-6 py-4 bg-white/20 backdrop-blur-lg text-white shadow-lg"
    >
      <h1 className="text-2xl text-blue-400 font-extrabold tracking-wide drop-shadow-md">🌐 MyAccount</h1>
      <div className="flex gap-4">
        {!user ? (
          <>
            <Link className="hover:text-yellow-200 transition text-yellow-400" to="/login">Login</Link>
            <Link className="hover:text-yellow-200 transition text-yellow-400" to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link className="hover:text-yellow-200 transition" to="/profile">Profile</Link>
            <button
              onClick={logout}
              className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;