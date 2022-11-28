import axios from 'axios';
import { Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [mongoUser, setMongoUser] = useState({})


    useEffect(() => {
        axios.get(`https://assainment-12.vercel.app/mongousers?email=${user?.email}`, {
            headers: {
                authorization: `${localStorage.getItem("token")}`,
            }
        })
            .then((response) => {
                setMongoUser(response.data);
            }).catch(error => { console.log(error) });
    }, [user]);

    return (
        <div className='p-10 w-full'>

            <div className="text-center">
                <h1 className='text-3xl mb-5 mt-10'>User Information</h1>
            </div>
            <Card>
                <div className="flex flex-col items-center pb-10">
                    <h5 className=" text-xl mb-1 font-medium text-gray-900 dark:text-white">
                        {mongoUser?.name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Role: {mongoUser.email}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Role: {mongoUser.role}
                    </span>
                </div>
            </Card>
        </div>
    );
};

export default Dashboard;