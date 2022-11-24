
import React from 'react';
import Banner from './Banner/Banner';
import ProductCategores from './ProductCategores/ProductCategores';

const Home = () => {
    return (
        <div className='mb-20'>
            <Banner></Banner>
            <ProductCategores></ProductCategores>
        </div>
    );
};

export default Home;