import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import Main from '../../Layouts/Main/Main';
import Login from '../../Pages/Authentication/Login';
import Register from '../../Pages/Authentication/Register';
import Blogs from '../../Pages/Blogs/Blogs';
import AddProduct from '../../Pages/Dashboard/AddProduct/AddProduct';
import AllBuyer from '../../Pages/Dashboard/AllBuyer/AllBuyer';
import AllSeller from '../../Pages/Dashboard/AllSeller/AllSeller';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
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
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            }
        ]
    }
])


const Route = () => {
    return (
        <div>
        </div>
    );
};

export default Route;