import { Building2, MapPin, DollarSign, Clock, Users } from 'lucide-react';
import { formatDistance } from 'date-fns';

const JobCard = ({ job }) => {
  const timeAgo = formatDistance(new Date(job.postedAt), new Date(), { addSuffix: true });

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{job.position}</h3>
          <div className="flex items-center text-gray-600 mt-1">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{job.companyName}</span>
          </div>
        </div>
        <span className="text-sm text-gray-500">{timeAgo}</span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="w-4 h-4 mr-2" />
          <span>{job.salary}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center text-gray-500 text-sm">
          <Users className="w-4 h-4 mr-1" />
          <span>{job.applications} applications</span>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;