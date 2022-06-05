import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { async } from '@firebase/util';
import Loading from '../Shared/Loading/Loading';


const Signup = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, uError] = useUpdateProfile(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = async data => {
        console.log(data)
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;

        if (password !== confirmPassword) {
            return toast.error('Password did not match, Please try again!')
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log(user);
    };


    useEffect(() => {
        if (user) {
          return  navigate('/');
        }
    },[user, navigate])

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div class="card card-compact w-[470px] mx-auto my-12 bg-base-100 shadow-xl">
            <div class="card-body m-8">
                <h1 className='text-2xl text-gray-900 text-center'>Create New Account!</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input
                        {...register("name", { required: true })}
                        type="text" placeholder="Enter your name" class="mt-5 input input-bordered  w-full max-w-md" />
                    {errors.name && <span className='text-red-500 '>Name is required</span>}
                    <input
                        {...register("email", { required: true })}
                        type="email" placeholder="Enter your email" class="mt-5 input input-bordered  w-full max-w-md" />
                    {errors.email && <span className='text-red-500 '>Email is required</span>}
                    <input
                        {...register("password", { required: true })}
                        type="password" placeholder="Password" class="mt-5 input input-bordered  w-full max-w-md" />
                    {errors.password && <span className='text-red-500 '>Password is required</span>}
                    <input
                        {...register("confirmPassword", { required: true })}
                        type="password" placeholder="Confirm password" class="mt-5 input input-bordered  w-full max-w-md" />
                    {errors.confirmPassword && <span className='text-red-500 '>Password is required</span>}
                    <input type="submit" className='btn w-full mt-5' value="Sign Up" />
                </form>
                <p className='text-md mt-4'>Already have an account? <Link to='/login' className='text-blue-900'>LogIn</Link> </p>
                <div class="divider">OR</div>
                <button class="btn btn-outline">Continue With Google</button>
            </div>
        </div>
    );
};

export default Signup;