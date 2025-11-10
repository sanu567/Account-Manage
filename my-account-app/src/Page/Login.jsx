import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.email, form.password);
  };

  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center min-h-[80vh]"
    >
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-80 sm:w-96 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Welcome Back 👋</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="text-black border-none w-full p-3 mb-3 rounded-lg bg-white/20 placeholder-black focus:ring-2 focus:ring-yellow-300 outline-none"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="text-black border-none w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-black focus:ring-2 focus:ring-yellow-300 outline-none"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-blue-900 font-semibold w-full py-2 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Login
          </motion.button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-yellow-400 underline">Register</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;