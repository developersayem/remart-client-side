import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className=''>
            <div class="container px-6 py-16 mx-auto text-center">
                <div class="max-w-lg mx-auto">
                    <h1 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Buy &  Sell SmartPhone from all over Bangladesh</h1>
                    <p class="mt-6 text-gray-500 dark:text-gray-300">Re-Mart is a platform on which you can buy and sell  mobile phones With safe, smart, and convenient for our customers.</p>
                    <button
                        class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                        <Link to='/products'>
                            Start Explore
                        </Link>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Banner;