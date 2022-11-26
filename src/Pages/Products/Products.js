import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductModal from './ProductModal/ProductModal';
import ProductsCard from './ProductsCard/ProductsCard';

const Products = () => {
    const data = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModlaData] = useState([]);

    return (
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-3xl font-bold">Phones</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10 px-16'>
                {
                    data?.map(item => <ProductsCard
                        key={item._id}
                        setModlaData={setModlaData}
                        setShowModal={setShowModal}
                        item={item}></ProductsCard>)
                }
            </div>
            <div>
                {
                    modalData ? <ProductModal
                        showModal={showModal}
                        modalData={modalData}
                        setModlaData={setModlaData}
                        setShowModal={setShowModal}
                    ></ProductModal> : <></>
                }
            </div>
        </div>
    );
};

export default Products;