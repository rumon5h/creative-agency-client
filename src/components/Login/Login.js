import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="card card-compact w-[470px] mx-auto my-12 bg-base-100 shadow-xl">
           <div class="card-body m-8">
           <form >
            <input type="email" placeholder="Enter your email" class="mt-5 input input-bordered  w-full max-w-md" />
            <input type="password" placeholder="Enter your Password" class="mt-5 input input-bordered  w-full max-w-md" />
            <input type="submit" className='btn w-full mt-5' value="Log In" />
            </form>
            <p className='text-md mt-4'>New to there? <Link to='/signup' className='text-blue-900'>Create new account</Link> </p>
            <div class="divider">OR</div>
            <button class="btn btn-outline">Continue With Google</button>
           </div>
        </div>
    );
};

export default Login;