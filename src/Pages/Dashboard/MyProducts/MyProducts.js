import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/UserContext';
import MyProductTb from './MyProductTb/MyProductTb';
import { useQuery } from '@tanstack/react-query';


const MyProducts = () => {
    const { user } = useContext(AuthContext);

    //load data by using tanstack query

    const { data: products = [], refetch } = useQuery({
        queryKey: ["apointments", user],
        queryFn: () => fetch(`https://assainment-12.vercel.app/myproducts?email=${user?.email}`).then(res => res.json())
    })

    return (
        <div className="container w-full mx-auto my-6 space-y-2 text-center sm:pr-5">
            <h2 className="text-3xl font-bold mb-10">My Products</h2>
            <div className='container'>
                {
                    products?.map(product => <MyProductTb
                        key={product._id}
                        product={product}
                        refetch={refetch}
                    ></MyProductTb>)
                }
            </div>
        </div>
    );
};

export default MyProducts;