import React, { useContext, useState, useEffect } from "react";
import NavBar from '../../Shared/NavBar';
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { FaCartPlus, FaPlus, FaUserFriends, FaBox, FaUsers } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Contexts/UserContext";
import axios from "axios";


const DashboardLayout = () => {
    useTitle("Dashboard")
    const [mongoUser, setMongoUser] = useState({})
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`https://assainment-12.vercel.app/mongousers?email=${user?.email}`)
            .then((response) => {
                setMongoUser(response.data);
            }).catch(error => { console.log(error) });
    }, [user]);



    const dbUserRole = mongoUser?.role;

    const menus = [];

    const myorders = { name: "My Orders", link: "/dashboard/myorders", icon: FaCartPlus };
    const allseller = { name: "All Seller", link: "/dashboard/allseller", icon: FaUserFriends };
    const allbuyer = { name: "All Buyer", link: "/dashboard/allbuyer", icon: FaUsers };
    const addproduct = { name: "Add Product", link: "/dashboard/addproduct", icon: FaPlus };
    const myproducts = { name: "My Products", link: "/dashboard/myproducts", icon: FaBox };


    switch (dbUserRole) {
        case "seller":
            menus.push(addproduct, myproducts)
            break;
        case "buyer":
            menus.push(myorders);

            break;
        case "admin":
            menus.push(allbuyer, allseller);
            break;
        default:
            { }
    }

    const [open, setOpen] = useState(true);
    return (
        <div className="">
            <NavBar></NavBar>
            <Toaster />
            <section className="flex gap-0 md:gap-6 ">
                <div
                    className={`bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen ${open ? "w-72" : "w-16"
                        } duration-500 text-gray-100 px-4`}
                >
                    <div className="py-3 flex justify-end">
                        <HiMenuAlt3
                            size={26}
                            className="cursor-pointer"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <div className="mt-4 flex flex-col gap-4 sticky z-10  left-0 top-0">
                        {menus?.map((menu, i) => (
                            <Link
                                to={menu?.link}
                                key={i}
                                className={` ${menu?.margin && "mt-5"
                                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                            >
                                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                        }`}
                                >
                                    {menu?.name}
                                </h2>
                                <h2
                                    className={`${open && "hidden"
                                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* CONTENT HERER */}
                <div className="m-3 text-xl text-gray-900 font-semibold">
                    <Outlet></Outlet>
                </div>
            </section>
        </div>
    );
};

export default DashboardLayout;