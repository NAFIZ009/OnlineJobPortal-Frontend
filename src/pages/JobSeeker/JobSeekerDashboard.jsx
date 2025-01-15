import { useState } from 'react';
import Banner from './components/Banner';
import JobCard from './components/JobCard';
import Footer from './components/Footer';

const SAMPLE_JOBS = [
  {
    id: 1,
    position: "Senior Frontend Developer",
    companyName: "Tech Solutions Inc.",
    location: "New York, NY",
    salary: "$120,000 - $150,000",
    postedAt: "2024-01-14T10:00:00",
    applications: 45
  },
  // Add more sample jobs here
];

const JobSeekerDashboard = () => {
  const [jobs] = useState(SAMPLE_JOBS);

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobSeekerDashboard;