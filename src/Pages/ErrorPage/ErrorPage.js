import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';



const ErrorPage = () => {
    return (
        <div className="container ml-10">
            <img className='w-2/3 mx-auto ' src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />
            <Button className='mx-auto absolute bottom-20 left-60 mx-96' gradientMonochrome="info">
                <Link to='/'>
                    Back to Home
                </Link>
            </Button>
        </div >
    );
};

export default ErrorPage;