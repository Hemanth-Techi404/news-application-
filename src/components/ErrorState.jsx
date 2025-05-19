import React from 'react';
import { AlertTriangle } from 'lucide-react';

const ErrorState = ({ message }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-md max-w-2xl mx-auto">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-10 w-10 text-red-500" />
          </div>
          <div className="ml-5">
            <h3 className="text-lg font-medium text-red-800">Error loading articles</h3>
            <div className="mt-2 text-red-700">
              <p>{message || 'An unexpected error occurred while fetching the news.'}</p>
              <p className="mt-3">Please try again later or contact support if the issue persists.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;