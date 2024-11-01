import React from 'react';
import { Vote, CheckCircle, Clock } from 'lucide-react';

const VoterDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-background rounded-full">
            <Vote className="h-12 w-12 text-primary" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-primary">Cast Your Vote</h2>
          <p className="mt-2 text-tertiary">
            Select your preferred candidate from the list below
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="border-2 border-light rounded-lg p-4 hover:border-secondary cursor-pointer transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-primary">Candidate 1</h3>
                <p className="text-sm text-tertiary">Position: President</p>
              </div>
              <CheckCircle className="h-6 w-6 text-light" />
            </div>
          </div>
          
          <div className="border-2 border-light rounded-lg p-4 hover:border-secondary cursor-pointer transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-primary">Candidate 2</h3>
                <p className="text-sm text-tertiary">Position: President</p>
              </div>
              <CheckCircle className="h-6 w-6 text-light" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Clock className="h-5 w-5 mr-2" />
            Submit Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoterDashboard;