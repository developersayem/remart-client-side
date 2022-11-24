import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layouts/Main/Main';
import Login from '../../Pages/Authentication/Login';
import Register from '../../Pages/Authentication/Register';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }, {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])


const Route = () => {
    return (
        <div>
        </div>
    );
};

export default Route;