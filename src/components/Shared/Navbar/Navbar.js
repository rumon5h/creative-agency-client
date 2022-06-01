import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Group 1367.png';

const Navbar = () => {

    return (
        <div className='flex justify-between mt-[30px] px-7 items-center'>
            <div>
                <Link  to='/'>
                    <img className='w-36 h-9' src={logo} alt="" />
                     </Link>
            </div>
            <div>
                <Link className='ml-3' to='/home'>Home</Link>
                <Link className='ml-3' to='/portfolio'>Our Portfolio</Link>
                <Link className='ml-3' to='/team'>Our Team</Link>
                <Link className='ml-3' to='/contact'>Contact Us</Link>
                <Link className='ml-3' to='/login'> <button class="btn px-9">LogIn</button></Link>
            </div>
        </div>
    );
};

export default Navbar;