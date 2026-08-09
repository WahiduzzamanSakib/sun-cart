'use client'

import Image from 'next/image';
import logoimg from "../../../public/logo.png"
import Link from 'next/link';
import React, { useState } from 'react';
import "animate.css";
import { usePathname, useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()
    const userData = authClient.useSession()
    console.log(userData)
    const router = useRouter()
    const user = userData.data?.user

    const handleSignOut = async () => {
        await authClient.signOut({
        });
        router.push("/")
    }

    const activeClass =
        "outline outline-2 outline-orange-500 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-md text-sm font-semibold transition-all"

    const normalClass =
        "font-bold px-3 py-1.5 text-sm hover:text-orange-600 transition-colors"

    return (
        <div className="border-b px-4 bg-blue-400 sticky top-0 z-50">
            <nav className="flex items-center justify-between py-3 max-w-7xl mx-auto w-full">

                {/* Brand / Logo */}
                <div className="flex gap-2 items-center">
                    <Image
                        src={logoimg}
                        alt="logo"
                        loading="eager"
                        width={35}
                        height={35}
                        className="rounded-full"
                    />
                    <h1 className="font-bold text-lg md:text-xl animate__animated animate__fadeInDown hover:scale-105 transition">
                        Suncart
                    </h1>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center gap-4 text-sm">
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

                {/* Desktop Authentication Controls */}
                <div className="hidden md:block">
                    {!user && (
                        <ul className="flex items-center gap-3 text-sm">
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

                    {user && (
                        <div className="flex gap-3 items-center">
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

                            <Button onClick={handleSignOut} color="danger">
                                Log Out
                            </Button>
                        </div>
                    )}
                </div>

                {/* Mobile Hamburger Toggle Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-gray-800 hover:text-black focus:outline-none"
                    aria-label="Toggle Navigation Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Expandable Drawer Menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col gap-4 pb-4 pt-2 border-t border-blue-300 animate__animated animate__fadeIn">
                    <ul className="flex flex-col items-center gap-3 text-sm">
                        <li onClick={() => setIsMenuOpen(false)}>
                            <Link href="/" className={pathname === '/' ? activeClass : normalClass}>
                                Home
                            </Link>
                        </li>

                        <li onClick={() => setIsMenuOpen(false)}>
                            <Link href="/products" className={pathname.startsWith('/products') ? activeClass : normalClass}>
                                Products
                            </Link>
                        </li>

                        <li onClick={() => setIsMenuOpen(false)}>
                            <Link href="/profile" className={pathname === '/profile' ? activeClass : normalClass}>
                                Profile
                            </Link>
                        </li>
                    </ul>

                    <div className="flex justify-center pt-2 border-t border-blue-300">
                        {!user && (
                            <ul className="flex justify-center gap-4 text-sm">
                                <li onClick={() => setIsMenuOpen(false)}>
                                    <Link
                                        href="/log"
                                        className={pathname === "/log" ? activeClass : normalClass}
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li onClick={() => setIsMenuOpen(false)}>
                                    <Link
                                        href="/login"
                                        className={pathname === "/login" ? activeClass : normalClass}
                                    >
                                        Registration
                                    </Link>
                                </li>
                            </ul>
                        )}

                        {user && (
                            <div className="flex gap-3 items-center">
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

                                <Button onClick={handleSignOut} color="danger">
                                    Log Out
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navber;