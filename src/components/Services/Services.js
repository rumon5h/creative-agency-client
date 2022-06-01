import React from 'react';
import codingImage from '../../images/coding.png';
import collerPlate from '../../images/color-palette.png';
import group from '../../images/group.png';

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Web & Mobile design',
            image: group,
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },
        {
            id: 2,
            name: 'Graphic design',
            image: collerPlate,
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
        },
        {
            id: 3,
            name: 'Web development',
            image: codingImage,
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
        },
    ]
    return (
        <div className='my-12'>
            <h1 className='text-2xl text-center'>Provide awesome <span className='text-[#7AB259]'>services</span> </h1>
            <div className='grid my-20 gap-4 grid-cols-3'>
                {
                    services.map(service => <div
                        key={service.id}
                        class="card bg-base-100 shadow-xl">

                        <div class="card-body items-center text-center">
                            <div class="avatar">
                                <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={service.image} alt=''/>
                                </div>
                            </div>
                            <h2 class="card-title">{service.name}</h2>
                            <p>{service.description}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;