import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisedCard = ({ product, setAdvertised }) => {
    const { img, model, description, category_id } = product;
    return (
        <Link to={`/category/${category_id}`}>
            <div className="max-w-sm">
                <Card imgSrc={img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {model}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </Card>
            </div>
        </Link>
    );
};

export default AdvertisedCard;