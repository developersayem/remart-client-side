import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';

const Main = () => {
    return (
        <div className='relative'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;