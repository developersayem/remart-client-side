import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layouts/Main/Main';
import Login from '../../Pages/Authentication/Login';
import Register from '../../Pages/Authentication/Register';
import Blogs from '../../Pages/Blogs/Blogs';
import ErrorPage from '../../Pages/Home/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';
import Products from '../../Pages/Products/Products';
import PrivetRoute from '../Route/Private/PrivateRoute'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category/:id',
                element: <PrivetRoute><Products></Products></PrivetRoute>,
                loader: async ({ params }) =>
                    fetch(
                        `https://assainment-12.vercel.app/category/${params.id}`
                    ),
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