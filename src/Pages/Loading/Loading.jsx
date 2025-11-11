import React from 'react';
import { Audio } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen animate-ping'>
          <Audio
      height="80"
      width="80"
      color="#d72050"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
        </div>
    );
};

export default Loading;