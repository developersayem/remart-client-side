import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/UserContext';
import OrdersTb from './OrdersTb/OrdersTb';

const MyOrders = () => {

    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://assainment-12.vercel.app/myorders?email=${user?.email}`,
            {
                headers: {
                    authorization: `${localStorage.getItem("token")}`,
                }
            })
            .then(res => res.json())
            .then(data => setData(data))
    }, [user])
    return (
        <div>
            {
                data?.map(item => <OrdersTb
                    key={item._id}
                    item={item}
                ></OrdersTb>)
            }
        </div>
    );
};

export default MyOrders;