// src/pages/Login/Login.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authService } from "@/lib/api/apiService";
import LoginUI from "./presentational/LoginUI";
import { toast } from "react-hot-toast";
import { useAuth } from "@/lib/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await authService.login(email, password);
      setAuth(response);

      // Show success message
      toast.success("Login successful!");

      // Redirect to the intended page or dashboard
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginUI
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default Login;
