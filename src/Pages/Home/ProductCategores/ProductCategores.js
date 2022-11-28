import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardSkeleton from '../../../Shared/CardSkeleton/CardSkeleton';
import CategoryCard from './CategoryCard/CategoryCard';

const ProductCategores = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const skeletonData = [
        { id: "1" },
        { id: "2" },
        { id: "3" },
    ]

    useEffect(() => {
        axios.get("https://assainment-12.vercel.app/categories").then((response) => {
            setData(response.data);
            setLoading(false);
        }).catch(error => { console.log(error) });
    }, []);

    return (
        <div className='container mt-16 '>
            <h2 className="text-5xl font-bold text-center">Categories</h2>
            <div className="container mx-auto p-4 my-6 space-y-2 ">
                <h1 className="mx-16 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome <span className="underline decoration-blue-500">Products</span></h1>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10 px-16'>
                {
                    loading ? <>

                        {
                            skeletonData.map(data => <CardSkeleton key={data.id}></CardSkeleton>)
                        }
                    </> :
                        <>
                            {
                                data?.map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default ProductCategores;