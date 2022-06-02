import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PlusIcon, UserAddIcon, FolderIcon } from '@heroicons/react/solid';



const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li> <Link to='service-list'> <FolderIcon className='w-6 h-6'></FolderIcon> Service List</Link> </li>
                    <li> <Link to='add-service'> <PlusIcon className='w-6 h-6'></PlusIcon> Add Service</Link> </li>
                    <li> <Link to='admin'> <UserAddIcon className='w-6 h-6'></UserAddIcon> Make Admin</Link> </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;