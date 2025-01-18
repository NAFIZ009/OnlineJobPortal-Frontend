// src/pages/Register/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "@/lib/api/apiService";
import RegisterUI from "./presentational/RegisterUI";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // Employee fields
    companyName: "",
    location: "",
    industry: "",
    // Job seeker fields
    hasExperience: "false",
    skills: "",
    position: "",
    yearsOfExperience: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Prepare registration data based on role
      const registrationData = {
        email: formData.email,
        password: formData.password,
        role: userRole,
        ...(userRole === "employee"
          ? {
              companyName: formData.companyName,
              location: formData.location,
              industry: formData.industry,
            }
          : {
              hasExperience: formData.hasExperience === "true",
              skills: formData.skills.split(",").map((skill) => skill.trim()),
              position: formData.position,
              yearsOfExperience: parseInt(formData.yearsOfExperience) || 0,
              industry: formData.industry,
            }),
      };

      await authService.register(registrationData);

      // Show success message
      toast.success("Registration successful! Please login.");

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterUI
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      userRole={userRole}
      setUserRole={setUserRole}
    />
  );
};

export default Register;
