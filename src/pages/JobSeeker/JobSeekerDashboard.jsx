// src/pages/JobSeeker/JobSeekerDashboard.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import HeroSection from "./components/HeroSection";
import Banner from "./components/Banner";
import LatestJobsSection from "./components/LatestJobsSection";
import FeaturedCompaniesSection from "./components/FeaturedCompaniesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import Footer from "./components/Footer";
import EmployerJobsSection from "./components/EmployerJobsSection";
import UserDashboardSection from "./components/UserDashboardSection";

const JobSeekerDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeDashboard = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          setUser(decodedToken);
          await fetchUserStats(decodedToken.roles);
        } catch (error) {
          console.error('Token decode error:', error);
          localStorage.removeItem('accessToken');
          navigate('/login');
        }
      }
      setIsLoading(false);
    };

    initializeDashboard();
  }, [navigate]);

  const fetchUserStats = async (role) => {
    try {
      // In a real application, you would fetch this data from your API
      // For now, using dummy data
      if (role === 'JOBSEEKER') {
        setStats({
          appliedJobs: 12,
          interviews: 3,
          savedJobs: 8,
          recentActivities: [
            { type: 'application', job: 'Frontend Developer', company: 'Tech Co', date: '2024-01-18' },
            { type: 'interview', job: 'UI Developer', company: 'Design Inc', date: '2024-01-15' },
          ]
        });
      } else {
        setStats({
          postedJobs: 5,
          totalApplications: 45,
          hiredCandidates: 3,
          recentActivities: [
            { type: 'newApplication', job: 'Senior Developer', applicant: 'John Doe', date: '2024-01-18' },
            { type: 'jobPosted', job: 'UX Designer', views: 123, date: '2024-01-15' },
          ]
        });
      }
    } catch (error) {
      console.error('Error fetching user stats:', error);
    }
  };

  const handleActionClick = (action) => {
    if (!user) {
      navigate("/login");
      return;
    }
    // Handle different actions based on user role
    switch (action) {
      case 'apply':
        if (user.roles === 'JOBSEEKER') {
          // Handle job application
        }
        break;
      case 'post':
        if (user.roles === 'EMPLOYEER') {
          navigate('/post-job');
        }
        break;
      // Add more cases as needed
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Show different content based on authentication status */}
      {!user ? (
        <>
          <Banner />
          <HeroSection onActionClick={handleActionClick} />
        </>
      ) : (
        <UserDashboardSection user={user} stats={stats} />
      )}

      {/* Show different sections based on user role */}
      {!user ? (
        <>
          <LatestJobsSection onActionClick={handleActionClick} />
          <FeaturedCompaniesSection onActionClick={handleActionClick} />
          <WhyChooseUsSection />
        </>
      ) : user.roles === 'EMPLOYEER' ? (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <EmployerJobsSection />
          </div>
        </section>
      ) : (
        <>
          <LatestJobsSection 
            onActionClick={handleActionClick} 
            showAllJobs={true}
            title="Available Jobs"
            description="Browse and apply to the latest job opportunities"
          />
          <FeaturedCompaniesSection onActionClick={handleActionClick} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default JobSeekerDashboard;