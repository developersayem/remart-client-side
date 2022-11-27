import React from 'react';
import { Button, Card, Tooltip } from 'flowbite-react';
import { FaCheckCircle } from "react-icons/fa";


const ProductsCard = ({ item, setShowModal, setModlaData }) => {
    const { img, model, original_price, posttime, resale_price, seeler_number, seller_name, seller_verified, years_of_used, location, edition, description, Conditions_type } = item;
    return (
        <div className="max-w-sm">
            <Card
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={img}
            >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    <Tooltip content={description}>
                        <h1 className='text-center'>
                            {model} (USED)
                        </h1>
                    </Tooltip>
                </h5>
                <div className=''>
                    <div className=' flex justify-evenly'>
                        <p className='my-0 py-0 text-neutral-500'>Edition : {edition}</p>
                        <p className='my-0 py-0 text-neutral-500'>Used : {years_of_used}</p>
                    </div>

                    <p className='my-0 py-0 text-neutral-500'>Condition : {Conditions_type}</p>

                    <p className='flex items-center  justify-center my-0 '
                    >Seller Name: {seller_name}<span className='ml-1'>{seller_verified ? <FaCheckCircle /> : <></>}</span></p>
                    <p
                        className='flex items-center  justify-center my-0 '
                    >Seller Number: {seeler_number}</p>
                    <p className='text-xs text-neutral-500'>Post on {posttime} <span>{location}</span></p>
                </div>
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

                <Button
                    onClick={() => {
                        setShowModal(true)
                        setModlaData(item)
                    }}
                    gradientMonochrome="info"
                >
                    Book Now
                </Button>
            </Card>
        </div>
    );
};

export default ProductsCard;