import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../Context/AuthContext";

const Profile = () => {
  const { user, register } = useAuth();
  const [form, setForm] = useState(user);

  const handleUpdate = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    register(form);
    alert("Profile updated successfully!");
  };

  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center min-h-[80vh]"
    >
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-80 sm:w-96 text-white">
        <h2 className="text-3xl text-blue-400 font-bold mb-6 text-center">Your Profile 👤</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={form.name}
            className="border-none w-full p-3 mb-3 rounded-lg bg-white/20 placeholder-black text-black focus:ring-2 focus:ring-yellow-300 outline-none"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            value={form.email}
            className="border-none w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-black text-black focus:ring-2 focus:ring-yellow-300 outline-none"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-blue-900 font-semibold w-full py-2 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Save Changes
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Profile;