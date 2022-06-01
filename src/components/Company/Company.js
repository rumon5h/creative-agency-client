import React from 'react';
import logo1 from '../../images/1.png'
import logo2 from '../../images/2.png'
import logo3 from '../../images/3.png'
import logo4 from '../../images/4.png'
import logo5 from '../../images/5.png'

const Company = () => {
    return (
        <div className='grid grid-cols-5 my-6 items-center justify-center mx-5'>
            <img src={logo1} className="w-44 h-9" alt="" />
            <img src={logo2} className="w-44 h-9" alt="" />
            <img src={logo3} className="w-44 h-9" alt="" />
            <img src={logo4} className="w-44 h-9" alt="" />
            <img src={logo5} className="w-44 h-9" alt="" />
        </div>
    );
};

export default Company;