import {
  Building2,
  MapPin,
  DollarSign,
  Clock,
  Users,
  BookmarkPlus,
  Share2,
} from "lucide-react";
import { formatDistance } from "date-fns";

const JobCard = ({ job, onApply }) => {
  const timeAgo = formatDistance(new Date(job.postedAt), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 relative overflow-hidden">
      {/* Company Logo & Bookmark */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-50 p-3 rounded-xl">
            <Building2 className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {job.position}
            </h3>
            <p className="text-gray-600 text-sm">{job.companyName}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
            title="Save job"
          >
            <BookmarkPlus className="w-5 h-5 text-gray-400 hover:text-blue-600" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
            title="Share job"
          >
            <Share2 className="w-5 h-5 text-gray-400 hover:text-blue-600" />
          </button>
        </div>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-3 text-gray-600">
          <div className="p-2 bg-blue-50 rounded-lg">
            <MapPin className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm">{job.location}</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-600">
          <div className="p-2 bg-green-50 rounded-lg">
            <DollarSign className="w-4 h-4 text-green-600" />
          </div>
          <span className="text-sm">{job.salary}</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-600">
          <div className="p-2 bg-purple-50 rounded-lg">
            <Clock className="w-4 h-4 text-purple-600" />
          </div>
          <span className="text-sm">{timeAgo}</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-600">
          <div className="p-2 bg-orange-50 rounded-lg">
            <Users className="w-4 h-4 text-orange-600" />
          </div>
          <span className="text-sm">{job.applications} applications</span>
        </div>
      </div>

      {/* Tags & Apply Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 pt-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
            Full Time
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-600 rounded-full">
            Remote
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
            Senior Level
          </span>
        </div>
        <button
          onClick={onApply}
          className="w-full sm:w-auto h-14 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 
                   focus:ring-4 focus:ring-blue-100 transition-all duration-300 
                   flex items-center justify-center space-x-2"
        >
          Apply Now
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default JobCard;
