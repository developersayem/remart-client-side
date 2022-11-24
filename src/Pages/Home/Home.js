
import React from 'react';
import SimpleFooter from '../../Shared/SimpleFooter/SimpleFooter';
import Banner from './Banner/Banner';
import ProductCategores from './ProductCategores/ProductCategores';

const Home = () => {
    return (
        <div className='mb-20'>
            <Banner></Banner>
            <ProductCategores></ProductCategores>
            <SimpleFooter></SimpleFooter>
        </div>
    );
};

export default Home;