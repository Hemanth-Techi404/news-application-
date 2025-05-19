import React from 'react';
import { Newspaper } from 'lucide-react';

interface HeaderProps {
  onSortChange: (sortBy: 'latest' | 'relevant') => void;
  sortBy: 'latest' | 'relevant';
}

const Header: React.FC<HeaderProps> = ({ onSortChange, sortBy }) => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Newspaper className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Daily News</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Sort by:</span>
            <div className="flex rounded-md overflow-hidden">
              <button
                onClick={() => onSortChange('latest')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  sortBy === 'latest' 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-blue-800 text-blue-200 hover:bg-blue-700'
                }`}
              >
                Latest
              </button>
              <button
                onClick={() => onSortChange('relevant')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  sortBy === 'relevant' 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-blue-800 text-blue-200 hover:bg-blue-700'
                }`}
              >
                Relevant
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;