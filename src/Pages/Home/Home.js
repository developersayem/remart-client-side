
import React from 'react';
import SimpleFooter from '../../Shared/SimpleFooter/SimpleFooter';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import ProductCategores from './ProductCategores/ProductCategores';

const Home = () => {
    return (
        <div className=''>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Feature></Feature>
            </section>
            <section>
                <ProductCategores></ProductCategores>
            </section>
            <section>
                <SimpleFooter></SimpleFooter>
            </section>
        </div>
    );
};

export default Home;