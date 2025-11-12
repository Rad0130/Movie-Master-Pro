import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen animate-ping'>
          <span className="loading loading-spinner text-red-600"></span>
        </div>
    );
};

export default Loading;