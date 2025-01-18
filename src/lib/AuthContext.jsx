// src/lib/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for auth data on mount
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
    setLoading(false);
  }, []);

  const login = (data) => {
    setAuth(data);
    localStorage.setItem('auth', JSON.stringify(data));
  };

  const logout = () => {
    setAuth({});
    localStorage.removeItem('auth');
  };

  const value = {
    auth,
    setAuth: login,
    loading,
    logout,
    isAuthenticated: !!auth?.accessToken
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};