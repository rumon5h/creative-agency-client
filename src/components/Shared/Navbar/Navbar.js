import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { LoginIcon } from '@heroicons/react/solid';

const Navbar = () => {

    return (
        <div className='flex bg-[#FBD062] justify-between py-[30px] px-7 items-center'>
            <div>
                <Link to='/'>
                    <img className='w-36 h-9' src={logo} alt="" />
                </Link>
            </div>
            <div>
                <Link className='ml-3 text-[17px]' to='/home'>Home</Link>
                <Link className='ml-3 text-[17px]' to='/dashboard'>Dashboard</Link>
                <Link className='ml-3 text-[17px]' to='/portfolio'>Our Portfolio</Link>
                <Link className='ml-3 text-[17px]' to='/team'>Our Team</Link>
                <Link className='ml-3 text-[17px]' to='/contact'>Contact Us</Link>
                <Link className='ml-3 text-[17px]' to='/login'> <button class="btn px-9"> <LoginIcon className='w-6 h-6 text-white mr-2'></LoginIcon> LogIn</button></Link>
            </div>
        </div>
    );
};

export default Navbar;