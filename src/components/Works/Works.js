import React from 'react';
import work1 from '../../images/work1.png';
import work2 from '../../images/work2.png';
import work3 from '../../images/work3.png';

const Works = () => {
    return (
        <div className='bg-[#111430] p-20'>
            <h1 className='text-2xl text-center text-white pb-14'>Here are some of <span className='text-[#7AB259]'>our works</span></h1>

            <div className='grid grid-cols-3 gap-5'>
                <img src={work1} className='w-[465px]' alt="" />
                <img src={work2} className='w-[465px]' alt="" />
                <img src={work3} className='w-[465px]' alt="" />
            </div>
        </div>
    );
};

export default Works;