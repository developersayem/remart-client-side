import React, { useEffect, useState } from 'react';
import AdvertisedCard from './AdvertisedCard/AdvertisedCard';


const Advertised = () => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch(`https://assainment-12.vercel.app/product/advertised`,
            {
                headers: {
                    authorization: `${localStorage.getItem("token")}`,
                }
            })
            .then(res => res.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <div className="container my-16">
            <div>
                <h1 className='text-center text-3xl font-bold'>Advertised Products</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10 px-16'>
                    {
                        products?.map(product => <AdvertisedCard
                            key={product._id}
                            product={product}
                        ></AdvertisedCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Advertised;