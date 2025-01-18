// src/components/sections/EmployerJobsSection/EmployerJobsSection.jsx
import { useState, useEffect } from 'react';
import { Plus, Users, FileCheck, Clock, Eye, Edit, Trash2, Briefcase, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAllJobList } from '@/lib/api/apiService';
import { toast } from 'react-hot-toast';

const JobCard = ({ job = {}, onAction }) => {
  // Safely access job properties with fallbacks
  const {
    id,
    position = 'Untitled Position',
    location = 'Location not specified',
    status = 'active',
    applications = 0,
    shortlisted = 0,
    daysLeft = 30
  } = job;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{position}</h3>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
          }`}>
            {status}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-500 text-sm mb-1">
              <Users className="w-4 h-4" />
              <span>Applications</span>
            </div>
            <p className="font-semibold">{applications}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-500 text-sm mb-1">
              <FileCheck className="w-4 h-4" />
              <span>Shortlisted</span>
            </div>
            <p className="font-semibold">{shortlisted}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-500 text-sm mb-1">
              <Clock className="w-4 h-4" />
              <span>Days Left</span>
            </div>
            <p className="font-semibold">{daysLeft}</p>
          </div>
        </div>

        <div className="flex justify-between pt-4 border-t border-gray-100">
          <Button 
            variant="outline" 
            className="w-full mr-2"
            onClick={() => onAction('view-applications', id)}
          >
            View Applications
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="px-2">
                <span className="sr-only">Open menu</span>
                <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="currentColor"/>
                  <path d="M7.5 3C8.32843 3 9 2.32843 9 1.5C9 0.671573 8.32843 0 7.5 0C6.67157 0 6 0.671573 6 1.5C6 2.32843 6.67157 3 7.5 3Z" fill="currentColor"/>
                  <path d="M13.5 3C14.3284 3 15 2.32843 15 1.5C15 0.671573 14.3284 0 13.5 0C12.6716 0 12 0.671573 12 1.5C12 2.32843 12.6716 3 13.5 3Z" fill="currentColor"/>
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onAction('view', id)}>
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onAction('edit', id)}>
                <Edit className="w-4 h-4 mr-2" />
                Edit Job
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onAction('delete', id)}
                className="text-red-600 focus:text-red-600"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Job
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

const ErrorState = ({ message, onRetry }) => (
  <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
    <div className="max-w-sm mx-auto">
      <div className="text-red-500 mb-4">
        <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{message}</h3>
      <Button 
        onClick={onRetry}
        variant="outline"
        className="flex items-center gap-2 mx-auto"
      >
        <RefreshCcw className="w-4 h-4" />
        Try Again
      </Button>
    </div>
  </div>
);

const EmptyState = ({ onPostJob }) => (
  <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
    <div className="max-w-sm mx-auto">
      <Briefcase className="w-12 h-12 mx-auto text-gray-400 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">No Jobs Posted Yet</h3>
      <p className="text-gray-500 mb-4">Start posting jobs to find the perfect candidates for your company.</p>
      <Button 
        onClick={onPostJob}
        className="flex items-center gap-2 mx-auto"
      >
        <Plus className="w-4 h-4" />
        Post Your First Job
      </Button>
    </div>
  </div>
);

const EmployerJobsSection = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployerJobs();
  }, []);

  const fetchEmployerJobs = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getAllJobList();
      setJobs(Array.isArray(response) ? response : []);
    } catch (error) {
      setError('Failed to fetch jobs. Please try again later.');
      toast.error('Failed to load jobs');
      console.error('Failed to fetch jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAction = async (actionType, jobId) => {
    try {
      switch (actionType) {
        case 'view':
          navigate(`/jobs/${jobId}`);
          break;
        case 'edit':
          navigate(`/jobs/edit/${jobId}`);
          break;
        case 'view-applications':
          navigate(`/jobs/${jobId}/applications`);
          break;
        case 'delete':
          if (window.confirm('Are you sure you want to delete this job?')) {
            // await deleteJob(jobId);
            toast.success('Job deleted successfully');
            setJobs(jobs.filter(job => job.id !== jobId));
          }
          break;
        default:
          break;
      }
    } catch (error) {
      toast.error('Action failed. Please try again.');
      console.error('Action failed:', error);
    }
  };

  const handlePostJob = () => {
    navigate('/post-job');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return <ErrorState message={error} onRetry={fetchEmployerJobs} />;
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Your Job Postings</h2>
          <p className="text-gray-500 mt-1">Manage your job listings and view applications</p>
        </div>
        <Button 
          onClick={handlePostJob}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Post New Job
        </Button>
      </div>

      {jobs.length === 0 ? (
        <EmptyState onPostJob={handlePostJob} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard 
              key={job.id ?? Math.random()} 
              job={job} 
              onAction={handleAction} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployerJobsSection;