import React from 'react';

const LoadingSpinner = () => {
  return (
      <div className="flex flex-auto flex-col justify-center items-center">
        <div className="flex justify-center">
          <div
            className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-red-700 rounded-full dark:text-red-700"
            role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
  );
};

export default LoadingSpinner;