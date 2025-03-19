import React from 'react';

const LoadingComponent = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-red-600 flex justify-center items-center z-[9999999999999999999999]'>
            ...loading
        </div>
    );
};

export default LoadingComponent;