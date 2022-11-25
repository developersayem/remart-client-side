import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ item }) => {
    const { category_name, category_id, description, price_range, _id } = item;
    console.log(_id);
    return (
        <Link to={`/category/${category_id}`}>
            <div className="max-w-sm">
                <Card>
                    <h5 className="text-2xl capitalize font-bold tracking-tight text-gray-900 dark:text-white">
                        {category_name}
                    </h5>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-400">
                        Price Range: {price_range} tk
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description.slice(0, 100) + "..."}
                    </p>
                </Card>
            </div>
        </Link>
    );
};

export default CategoryCard;