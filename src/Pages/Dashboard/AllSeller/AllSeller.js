import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SellerTableData from './SellerTableData/TableData'

const AllSeller = () => {
    //load data by using tanstack query

    const { data: users = [], refetch } = useQuery({
        queryKey: ["products",],
        queryFn: () => fetch(`https://assainment-12.vercel.app/allseller`,
            {
                headers: {
                    authorization: `${localStorage.getItem("token")}`,
                }
            }).then(res => res.json())
    })


    return (
        <div className="container w-full mx-auto my-6 space-y-2 text-center sm:pr-5">
            <h2 className="text-3xl font-bold mb-10">All Buyers</h2>
            <div>
                {
                    users?.map((data, index) => <SellerTableData
                        key={data._id}
                        data={data}
                        index={index}
                        refetch={refetch}
                    ></SellerTableData>)
                }
            </div>
        </div>
    );
};

export default AllSeller;