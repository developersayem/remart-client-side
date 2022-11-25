import React from 'react';
import { Card } from 'flowbite-react';
import { FaCheckCircle } from "react-icons/fa";


const ProductsCard = ({ item }) => {
    console.log(item);
    const { img, model, original_price, posttime, resale_price, seeler_number, seller_name, seller_verified, years_of_used, location, edition, description, category } = item;
    return (
        <div className="max-w-sm">
            <Card
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={img}
            >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {model} (USED)
                </h5>
                <p className='my-0 py-0 text-neutral-500'>Edition : {edition}</p>
                <p className='my-0 py-0 text-neutral-500'>Used : {years_of_used}</p>
                <p
                    className='flex items-center  justify-center my-0 '
                >Seller Name: {seller_name}<span className='ml-1'>{seller_verified ? <FaCheckCircle /> : <></>}</span></p>
                <div className="flex items-center justify-between">
                    <div className='flex flex-col'>
                        <span className='line-through decoration-red-600'>
                            {original_price} tk
                        </span>
                        <span className='text-xs'>Original Price</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            {resale_price} tk
                        </span>
                        <span className='text-xs'>Resale Price</span>
                    </div>
                </div>
                <p className='text-xs text-neutral-500'>Post on {posttime} <span>{location}</span></p>
                <a
                    href="/"
                    className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Book Now
                </a>
            </Card>
        </div>
    );
};

export default ProductsCard;