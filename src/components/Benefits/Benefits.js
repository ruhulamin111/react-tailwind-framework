import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Benefits = ({ benefits }) => {
    return (
        <div className='flex items-center gap-2 my-2 '>
            <CheckCircleIcon className='w-4 h-4'></CheckCircleIcon>
            <p>{benefits}</p>
        </div>
    );
};

export default Benefits;