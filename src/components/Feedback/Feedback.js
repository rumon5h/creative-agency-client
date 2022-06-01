import React from 'react';
import pp1 from '../../images/pp1.png';
import pp2 from '../../images/pp2.png';
import pp3 from '../../images/pp3.png';

const Feedback = () => {
    const clients = [
        {
            id: 1,
            image: pp1,
            name: 'Nash Patrik',
            status: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
        },
        {
            id: 2,
            image: pp2,
            name: 'Miriam Barron',
            status: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
        },
        {
            id: 3,
            image: pp3,
            name: 'Bria Malone',
            status: 'CEO, Manpol',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
        },
    ];
    return (
        <div>
            <h1 className='text-2xl text-center my-9 text-gray-900'>Clients <span className='text-[#7AB259]'>Feedback</span></h1>
            <div className='grid grid-cols-3 gap-5 my-9'>
                {
                    clients.map(client => <div key={client.id} class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <img className='w-16 h-16 mr-3' src={client.image} alt="" />
                               <div>
                               <h1 className='text-xl font-Poppins'>{client.name}</h1>
                                <p>{client.status}</p>
                                
                               </div>
                            </div>
                               <p>{client.review}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Feedback;