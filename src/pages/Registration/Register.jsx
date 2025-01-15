import { useState } from 'react';
import RegisterUI from './presentational/RegisterUI';

const Register = () => {
  const [userRole, setUserRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    // Employee fields
    companyName: '',
    location: '',
    industry: '',
    // Job seeker fields
    hasExperience: 'false',
    skills: '',
    position: '',
    yearsOfExperience: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // API integration will be added here
      console.log('Registration data:', { ...formData, role: userRole });
    } catch (error) {
      console.error('Registration error:', error);
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
      userRole={userRole}
      setUserRole={setUserRole}
    />
  );
};

export default Register;