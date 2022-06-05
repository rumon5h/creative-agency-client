import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { LoginIcon, LogoutIcon, MenuIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user]  = useAuthState(auth);

    const navlink = <>
        <Link className='ml-3 text-[17px]' to='/home'>Home</Link>
        <Link className='ml-3 text-[17px]' to='/dashboard'>Dashboard</Link>
        <Link className='ml-3 text-[17px]' to='/portfolio'>Our Portfolio</Link>
        <Link className='ml-3 text-[17px]' to='/team'>Our Team</Link>
        <Link className='ml-3 text-[17px]' to='/contact'>Contact Us</Link>
        
        {
            user ? <Link 
            onClick={() => signOut(auth)}
            className='ml-3 text-[17px]' to='/login'> <button class="btn px-9"> <LogoutIcon className='w-6 h-6 text-white mr-2'></LogoutIcon> Log Out</button></Link> : <Link className='ml-3 text-[17px]' to='/login'> <button class="btn px-9"> <LoginIcon className='w-6 h-6 text-white mr-2'></LoginIcon> LogIn</button></Link>        }
    </>

    return (
        <div className='flex bg-[#FBD062] justify-between py-[30px] px-7 items-center'>
            <div>
                <Link to='/'>
                    <img className='w-36 h-9' src={logo} alt="" />
                </Link>
            </div>
            <div className='hidden lg:block'>
                {navlink}
            </div>
            <div class="dropdown block lg:hidden dropdown-end">
                <MenuIcon tabindex="0" class="btn m-1"></MenuIcon>
                <ul tabindex="0" class="dropdown-content menu gap-5 p-2 shadow bg-base-100 rounded-box w-52">
                   {navlink}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;