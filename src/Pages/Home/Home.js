
import React from 'react';
import SimpleFooter from '../../Shared/SimpleFooter/SimpleFooter';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import ProductCategores from './ProductCategores/ProductCategores';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Feature></Feature>
            <ProductCategores></ProductCategores>
            <SimpleFooter></SimpleFooter>
        </div>
    );
};

export default Home;