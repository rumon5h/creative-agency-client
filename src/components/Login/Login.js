import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div class="card card-compact w-[470px] mx-auto my-12 bg-base-100 shadow-xl">
            <div class="card-body m-8">
                <h1 className='text-2xl text-gray-900 text-center'>Please LogIn!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email", { required: true })}
                      placeholder="Enter your email" class="mt-5 input input-bordered  w-full max-w-md" />
                    {errors.email && <span className='text-red-500 '>Email is required</span>}

                    <input 
                     {...register("password", { required: true })}
                    placeholder="Enter your Password" class="mt-5 input input-bordered  w-full max-w-md" />
                    {errors.password && <span className='text-red-500 '>Password is required</span>}

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