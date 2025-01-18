// src/pages/JobSeeker/JobSeekerDashboard.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Banner from "./components/Banner";
import LatestJobsSection from "./components/LatestJobsSection";
import FeaturedCompaniesSection from "./components/FeaturedCompaniesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import Footer from "./components/Footer";


const JobSeekerDashboard = () => {
  const [isLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleActionClick = (action) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    // Handle logged-in user actions
    console.log(`Handling ${action} for logged-in user`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <Banner />

      {/* Hero Section with Search */}
      <HeroSection onActionClick={handleActionClick} />

      {/* Latest Jobs Section */}
      <LatestJobsSection onActionClick={handleActionClick} />

      {/* Featured Companies Section */}
      <FeaturedCompaniesSection onActionClick={handleActionClick} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JobSeekerDashboard;