import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const login = (email, password) => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored && stored.email === email && stored.password === password) {
      setUser(stored);
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  const register = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);