'use client'

import Image from 'next/image';
import logoimg from "../../../public/logo.png"
import Link from 'next/link';
import React from 'react';
import "animate.css";
import { usePathname } from 'next/navigation'
import { Button } from '@heroui/react';

const Navber = () => {
    const pathname = usePathname()

    const activeClass = "outline outline-2 outline-orange-500 bg-orange-50 text-orange-600 px-2 py-1 rounded-md"

    const normalClass = "font-bold px-2 py-1"

    return (
        <div className="border-b px-2 bg-blue-400">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

                <div className="flex gap-2 items-center">
                    <Image
                        // src="/logo.png"
                        src={logoimg}
                        alt="logo"
                        loading="eager"
                        width={40}
                        height={40}
                        className="object-cover h-auto w-auto font-bold rounded-full"/>
                    <h1 className="font-bold animate__animated animate__fadeInDown transition-transform duration-300 hover:scale-110">
                        Suncart
                    </h1>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link
                            href="/"
                            className={pathname === '/' ? activeClass : normalClass}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/products"
                            className={pathname.startsWith('/products') ? activeClass : normalClass}>
                            Products
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/profile"
                            className={pathname === '/profile' ? activeClass : normalClass}>
                            Profile
                        </Link>
                    </li>
                </ul>


                <ul className='flex gap-2'>
                    <li>
                        <Link href="/log">
                            <Button className={pathname === '/log' ? activeClass : normalClass}>
                                Login
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/login" className={pathname === '/login' ? activeClass : normalClass}>
                            Registration
                        </Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navber;