import React from 'react';
import { FaDollarSign, FaShoppingCart, FaCreditCard } from "react-icons/fa";

const Feature = () => {
    return (
        <section className="bg-white dark:bg-gray-900 mx-10">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome <span className="underline decoration-blue-500">Products</span></h1>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                        <span className="inline-block text-3xl mb-5 text-blue-500 dark:text-blue-400">
                            <FaDollarSign />
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Price</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            We offer various price range to choose what the customer needed with his/her Budget range.
                        </p>

                        <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                        <span className="inline-block text-3xl mb-5 text-blue-500 dark:text-blue-400">
                            <FaShoppingCart />
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Easy to Buy</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            We provide a simple selling and buying process so that anyone can easily
                            buy product from us.
                        </p>

                        <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                        <span className="inline-block text-3xl mb-5 text-blue-500 dark:text-blue-400">
                            <FaCreditCard />
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean Payment</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            buy a product on online, Payment is a functionality.And we provide a simple payment functionality.
                        </p>

                        <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;