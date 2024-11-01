import React from 'react';
import { Users, Activity, UserCheck } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 p-6 border-t-4 border-primary">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-primary" />
            <h3 className="ml-3 text-xl font-medium text-primary">Candidates</h3>
          </div>
          <p className="mt-2 text-sm text-tertiary">Manage election candidates</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 p-6 border-t-4 border-secondary">
          <div className="flex items-center">
            <UserCheck className="h-8 w-8 text-secondary" />
            <h3 className="ml-3 text-xl font-medium text-primary">Voters</h3>
          </div>
          <p className="mt-2 text-sm text-tertiary">Manage voter eligibility</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 p-6 border-t-4 border-tertiary">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-tertiary" />
            <h3 className="ml-3 text-xl font-medium text-primary">Results</h3>
          </div>
          <p className="mt-2 text-sm text-tertiary">View election results</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;