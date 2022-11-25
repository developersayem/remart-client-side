import { Footer } from 'flowbite-react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const SimpleFooter = () => {
    return (
        <Footer container={true}>
            <div className="w-full text-center mx-10">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        className='bg-gradient-to-r  from-blue-600  to-blue-500 font-mono font-extrabold  inline-block text-transparent bg-clip-text text-3xl'
                        href="/"
                        name="ReMart"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">
                            About
                        </Footer.Link>
                        <Footer.Link href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Licensing
                        </Footer.Link>
                        <Footer.Link href="#">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="ReMart™"
                        year={2022}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:items-end sm:justify-center">
                        <Footer.Icon
                            className='hover:text-blue-500'
                            href="#"
                            icon={FaFacebook}
                        />
                        <Footer.Icon
                            className='hover:text-pink-500'
                            href="#"
                            icon={FaInstagram}
                        />
                        <Footer.Icon
                            className='hover:text-blue-500'
                            href="#"
                            icon={FaTwitter}
                        />
                        <Footer.Icon
                            className='hover:text-black'
                            href="#"
                            icon={FaGithub}
                        />
                        <Footer.Icon
                            className='hover:text-pink-500'
                            href="#"
                            icon={FaDribbble}
                        />
                    </div>
                </div>
            </div>
        </Footer >
    );
};

export default SimpleFooter;