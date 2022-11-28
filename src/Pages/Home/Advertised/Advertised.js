import React, { useEffect, useState } from 'react';
import AdvertisedCard from './AdvertisedCard/AdvertisedCard';


const Advertised = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product/advertised`)
            .then(res => res.json())
            .then((data) => setProducts(data))
    }, [])
    console.log(products)

    return (
        <div className="container my-16">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10 px-16'>
                {
                    products?.map(product => <AdvertisedCard
                        key={product._id}
                        product={product}
                    ></AdvertisedCard>)
                }
            </div>
        </div>
    );
};

export default Advertised;