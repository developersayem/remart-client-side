import React, { useContext } from 'react';
import { Navbar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';


const NavBar = () => {

    const { user, LogOut } = useContext(AuthContext);

    return (
        <Navbar className="px-10 "
            fluid={true}
            rounded={true}
        >
            <Link to='/'>
                <h1 className="bg-gradient-to-r  from-blue-600  to-blue-500 font-mono font-extrabold  inline-block text-transparent bg-clip-text text-3xl">ReMart</h1>
            </Link>
            <div className="flex md:order-2">
                <h1 className='mt-2 font-bold mr-5 sm:ml-10 text-sm'>
                    {user?.displayName}
                </h1>
                <Button
                    size="sm"
                    className={`mx-2 ${user ? "md:block" : "hidden"}`} gradientMonochrome="info">
                    <Link
                        onClick={LogOut}
                    >
                        Log Out
                    </Link>
                </Button>
                <Button
                    size="sm"
                    className={`mx-2 ${user ? "hidden" : "md:block"}`} gradientMonochrome="info">
                    <Link
                        to='/login'>
                        Log in
                    </Link>
                </Button>
                <Button
                    size="sm"
                    className={`mx-2 ${user ? "hidden" : "md:block"}`} gradientMonochrome="info">
                    <Link
                        to='/register'>
                        Register
                    </Link>
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='flex justify-center mt-3 lg:ml-20'>
                <Link
                    className='my-1  mx-2'
                    to='/home'>
                    Home
                </Link>
                <Link
                    className='my-1  mx-2'
                    to='/blogs'>
                    Blogs
                </Link>
                <Link
                    className='my-1  mx-2'
                    to='/dashboard'>
                    Dashboard
                </Link>
                <Button
                    size="xs"
                    className={`mx-2 my-1 ${user ? "md:hidden" : "hidden"}`} gradientMonochrome="info">
                    <Link
                        to='/logout'>
                        Log Out
                    </Link>
                </Button>
                <Button
                    size="xs"
                    className={`mx-2 my-1 ${user ? "hidden" : "md:hidden"}`} gradientMonochrome="info">
                    <Link
                        to='/login'>
                        Log in
                    </Link>
                </Button>
                <Button
                    size="xs"
                    className={`mx-2 my-1 ${user ? "hidden" : "md:hidden"}`} gradientMonochrome="info">
                    <Link
                        to='/register'>
                        Register
                    </Link>
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;