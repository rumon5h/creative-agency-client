import React from 'react';
import banner from '../../images/workers.png';

const Header = () => {
    return (
        <div class="hero h-[422] min-h-screen bg-[#FBD062]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='w-[50%] rounded-lg shadow-2xl'>
                    <img src={banner} class="w-[625px] h-[422px] " alt='' />
                </div>
                <div className='w-[50%]'>
                    <h1 class="text-5xl font-bold">Let’s Grow Your
                        Brand To The
                        Next Level</h1>
                    <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button class="btn px-12">Hire us</button>
                </div>
            </div>
        </div>
    );
};

export default Header;