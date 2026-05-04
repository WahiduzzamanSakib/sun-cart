import Image from 'next/image';
// import logoImg from "../../public/logo.png";
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="bg-blue-300 border-t mt-6 border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">


                    <div className="lg:col-span-2">

                        <h2 className=' flex gap-3 cursor-pointer'>
                            <Image
                            src="/logo.png" alt="logo" width={40} height={40}
                            className="rounded-full h-auto w-auto font-bold" />
                           <span className='text-3xl font-bold'>Suncart</span> 
                            </h2>

                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Join our Newsletter</h3>
                        <p className="mt-4 text-gray-600 text-sm">Get the latest updates on new collections and upcoming sales.</p>
                        <div className='flex gap-3 my-4'>
                            <a href="#linkden"><IoLogoLinkedin size={30} /> </a>
                            <a href="#facebook"> <FaFacebook size={30} /></a>
                            <a href="#instagram"> <FaSquareInstagram size={30} /></a>
                            <a href="#twiter"> <FaSquareTwitter size={30} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-md font-bold hover:text-blue-500">Shop</h3>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li><a href="#" className="text-gray-600 hover:text-pink-600">New Arrivals</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-pink-600">Best Sellers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-pink-600">Sale & Offers</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-md font-bold hover:text-blue-500">Customer Service</h3>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li><a href="#" className="text-gray-600 hover:text-pink-600 ">Track Order</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-pink-600 ">Shipping Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-pink-600 ">Returns & Exchanges</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-pink-600 ">Contact Us</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-md font-bold hover:text-blue-500 ">About Us</h3>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li><a href="#" className="text-gray-600 hover:text-pink-600 ">Our Story</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-pink-600 ">Sustainability</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-pink-600">Store Locator</a></li>
                        </ul>
                    </div>
                </div>


                <div className="border-t border-gray-100 pt-8  flex flex-col md:flex-row justify-between items-center gap-6 text-center">
                    <div className="text-gray-500 text-xs flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                        <span>&copy; 2026 E-Shop Ltd.</span>
                        <a href="#" className="hover:text-pink-600">Privacy</a>
                        <a href="#" className="hover:text-pink-600">Terms</a>
                        <a href="#" className="hover:text-pink-600">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;