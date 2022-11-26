import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';
import { Toaster } from 'react-hot-toast';


const Main = () => {
    return (
        <div className='relative'>
            <NavBar></NavBar>
            <Toaster />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;