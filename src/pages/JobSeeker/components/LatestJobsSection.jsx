// src/components/JobSeeker/sections/LatestJobsSection/data.js
export const SAMPLE_JOBS = [
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

// src/components/JobSeeker/sections/LatestJobsSection/index.jsx
import { ArrowRight } from "lucide-react";
import JobCard from "./JobCard";

const LatestJobsSection = ({ onActionClick }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Latest Job Openings
          </h2>
          <p className="text-gray-600">Discover your next career opportunity</p>
        </div>
        <button
          onClick={() => onActionClick("viewAll")}
          className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
        >
          View All Jobs
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SAMPLE_JOBS.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onApply={() => onActionClick("apply")}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestJobsSection;
