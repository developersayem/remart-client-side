import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar className="mx-10"
            fluid={true}
            rounded={true}
        >
            <Link to='/'>
                <h1 className="bg-gradient-to-r  from-blue-600  to-blue-500 font-mono font-extrabold  inline-block text-transparent bg-clip-text text-3xl">ReMart</h1>
            </Link>
            <div className="flex md:order-2">
                <Button className='hidden' gradientMonochrome="info">
                    Avater
                </Button>
                <Button className='hidden mx-2' gradientMonochrome="info">
                    <Link
                        to='/logout'>
                        Log Out
                    </Link>
                </Button>
                <Button className='hidden md:block mx-2' gradientMonochrome="info">
                    <Link
                        to='/login'>
                        Log in
                    </Link>
                </Button>
                <Button className='hidden md:block mx-2' gradientMonochrome="info">
                    <Link
                        to='/register'>
                        Register
                    </Link>
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='flex justify-center'>
                <Link
                    to='/home'>
                    Home
                </Link>
                <Link
                    to='/blogs'>
                    Blogs
                </Link>
                <Button className='md:hidden my-1  mx-2' gradientMonochrome="info">
                    <Link
                        to='/logout'>
                        Log Out
                    </Link>
                </Button>
                <Button className='md:hidden my-1 mx-2' gradientMonochrome="info">
                    <Link
                        to='/login'>
                        Log in
                    </Link>
                </Button>
                <Button className='md:hidden my-1 mx-2' gradientMonochrome="info">
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