import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
