import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';
import SimpleFooter from '../../Shared/SimpleFooter/SimpleFooter';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <SimpleFooter></SimpleFooter>
        </div>
    );
};

export default Main;