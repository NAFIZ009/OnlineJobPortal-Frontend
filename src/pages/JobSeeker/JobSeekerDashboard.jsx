import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Briefcase, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Banner from "./components/Banner";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";


const SAMPLE_JOBS = [
  {
    id: 1,
    position: "Senior Frontend Developer",
    companyName: "Tech Solutions Inc.",
    location: "New York, NY",
    salary: "$120,000 - $150,000",
    postedAt: "2024-01-14T10:00:00",
    applications: 45,
  },
  {
    id: 2,
    position: "Full Stack Engineer",
    companyName: "Digital Innovations",
    location: "San Francisco, CA",
    salary: "$130,000 - $160,000",
    postedAt: "2024-01-15T09:00:00",
    applications: 32,
  },
  {
    id: 3,
    position: "UX Designer",
    companyName: "Creative Works",
    location: "Austin, TX",
    salary: "$90,000 - $120,000",
    postedAt: "2024-01-16T11:00:00",
    applications: 28,
  },
];

const FEATURED_COMPANIES = [
  {
    id: 1,
    name: "Tech Giants Co.",
    description: "Leading technology solutions provider",
    openPositions: 15,
    logo: "/api/placeholder/64/64",
  },
  {
    id: 2,
    name: "Innovate Labs",
    description: "Cutting-edge research and development",
    openPositions: 8,
    logo: "/api/placeholder/64/64",
  },
  {
    id: 3,
    name: "Digital Future",
    description: "Building tomorrow's digital solutions",
    openPositions: 12,
    logo: "/api/placeholder/64/64",
  },
];

const JobSeekerDashboard = () => {
  const [jobs] = useState(SAMPLE_JOBS);
  const [isLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleActionClick = (action) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    console.log(`Handling ${action} for logged-in user`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />

      {/* Hero Section with Search */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Find Your Dream Job Today
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 animate-fade-in-delay">
              Connect with top companies and opportunities that match your skills
            </p>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4 animate-fade-in-up">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full py-3 focus:outline-none text-gray-700"
                />
              </div>
              <button
                onClick={() => handleActionClick("search")}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 
                         transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Search Jobs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Briefcase className="w-6 h-6" />
                  <span className="text-3xl font-bold">10,000+</span>
                </div>
                <p className="text-blue-100">Active Jobs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Users className="w-6 h-6" />
                  <span className="text-3xl font-bold">5,000+</span>
                </div>
                <p className="text-blue-100">Companies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6" />
                  <span className="text-3xl font-bold">20,000+</span>
                </div>
                <p className="text-blue-100">Job Seekers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest Job Openings
            </h2>
            <p className="text-gray-600">Discover your next career opportunity</p>
          </div>
          <button
            onClick={() => handleActionClick("viewAll")}
            className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Jobs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={() => handleActionClick("apply")}
            />
          ))}
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue-600 font-semibold mb-4 block">For Employers</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Looking to Hire Top Talent?
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Post your job openings and reach thousands of qualified candidates. 
                  Our platform connects you with the right talent for your company.
                </p>
                <button
                  onClick={() => handleActionClick("postJob")}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold 
                           hover:bg-blue-700 transition-all duration-300 
                           hover:shadow-lg hover:-translate-y-1
                           flex items-center gap-2 group"
                >
                  Post a Job Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {FEATURED_COMPANIES.slice(0, 4).map((company) => (
                  <div
                    key={company.id}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300
                             transform hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 group-hover:shadow-md transition-all">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-16 h-16 mx-auto"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-center">
                      {company.name}
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                      {company.openPositions} open positions
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose JobPortal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to making your job search experience seamless and successful
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Job Matching",
                description: "Our AI-powered system matches you with the most relevant opportunities",
                icon: "🎯"
              },
              {
                title: "Verified Employers",
                description: "All companies are thoroughly vetted to ensure legitimate opportunities",
                icon: "✓"
              },
              {
                title: "Career Growth",
                description: "Access resources and tools to help advance your career",
                icon: "📈"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobSeekerDashboard;
