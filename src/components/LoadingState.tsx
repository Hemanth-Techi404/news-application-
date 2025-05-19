import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-8"></div>
      <h2 className="text-xl font-semibold text-gray-700">Loading articles...</h2>
      <p className="text-gray-500 mt-2">Please wait while we fetch the latest mental health news</p>
    </div>
  );
};

export default LoadingState;