'use client'

import Image from 'next/image';
import logoimg from "../../../public/logo.png"
import Link from 'next/link';
import React from 'react';
import "animate.css";
import { usePathname, useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';




const Navber = () => {
    const pathname = usePathname()
    const userData = authClient.useSession()
    const router = useRouter()
    const user = userData.data?.user

    const handleSignOut = async () => {
        await authClient.signOut({
        });
        router.push("/")
    }


    const activeClass =
        "outline outline-2 outline-orange-500 bg-orange-50 text-orange-600 px-2 py-1 rounded-md text-sm"

    const normalClass =
        "font-bold px-2 py-1 text-sm"

    return (
        <div className="border-b px-2 bg-blue-400">
            <nav className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 py-3 max-w-7xl mx-auto w-full">


                <div className="flex gap-2 items-center justify-between w-full md:w-auto">
                    <div className="flex gap-2 items-center">
                        <Image
                            src={logoimg}
                            alt="logo"
                            loading="eager"
                            width={35}
                            height={35}
                            className="rounded-full"
                        />
                        <h1 className="font-bold text-base md:text-lg animate__animated animate__fadeInDown hover:scale-105 transition">
                            Suncart
                        </h1>
                    </div>
                </div>


                <ul className="flex flex-wrap justify-center md:flex-nowrap items-center gap-2 md:gap-5 text-sm">
                    <li>
                        <Link href="/" className={pathname === '/' ? activeClass : normalClass}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/products" className={pathname.startsWith('/products') ? activeClass : normalClass}>
                            Products
                        </Link>
                    </li>

                    <li>
                        <Link href="/profile" className={pathname === '/profile' ? activeClass : normalClass}>
                            Profile
                        </Link>
                    </li>
                </ul>

                <div>
                    {!user && (
                        <ul className="flex justify-center md:justify-end gap-2 text-sm">
                            <li>
                                <Link
                                    href="/log"
                                    className={pathname === "/log" ? activeClass : normalClass}
                                >
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/login"
                                    className={pathname === "/login" ? activeClass : normalClass}
                                >
                                    Registration
                                </Link>
                            </li>
                        </ul>
                    )}

                    {
                        user && (
                            <div className="flex gap-2 items-center">
                                <Avatar>
                                    <Avatar.Image
                                        alt="User avatar"
                                        src={user?.image}
                                        referrerPolicy="no-referrer"
                                    />
                                    <Avatar.Fallback>
                                        {user?.name?.[0]}
                                    </Avatar.Fallback>
                                </Avatar>

                                <Button onClick={handleSignOut} variant="danger">
                                    Log Out
                                </Button>
                            </div>
                        )
                    }

                </div>
            </nav>
        </div>
    );
};

export default Navber;