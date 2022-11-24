import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard/CategoryCard';

const ProductCategores = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/categories").then((response) => {
            setData(response.data);
        });
    }, []);

    console.log(data);
    return (
        <div>
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Categories</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10 px-16'>
                {
                    data?.map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategores;