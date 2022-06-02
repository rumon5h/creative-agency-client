import React from 'react';

const Contact = () => {
    return (
        <div class="hero min-h-screen p-9 bg-[#FBD062]">
            <div class="grid grid-cols-2">
                <div class="text-center w-[90%] lg:text-left">
                    <h1 class="text-5xl font-bold">Let us handle your project, professionally.</h1>
                    <p class="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div class="card w-[90%] shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            
                            <input type="text" placeholder="Your email address" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                         
                            <input type="text" placeholder="Your name / company name" class="input input-bordered" />
                        
                        </div>
                        <div class="form-control">
                         
                        <textarea class="textarea h-52 textarea-bordered"  placeholder="Your message"></textarea>
                        
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-active">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;