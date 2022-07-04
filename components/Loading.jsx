import React from 'react';
import Image from 'next/image';
import loading from '../public/bubble.gif';

const Loading = () => {
    return (
        <div className='flex flex-col items-center'>
            <Image src={loading} alt="Loading..." className='w-56 h-auto block' />
        </div>
    )
}

export default Loading;