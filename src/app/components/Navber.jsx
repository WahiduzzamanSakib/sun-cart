"use client";

import Image from "next/image";
import logoimg from "../../../public/logo.png";
import Link from "next/link";
import React, { useState } from "react";
import "animate.css";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import {
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const userData = authClient.useSession();
  const user = userData.data?.user;

  // =========================
  // Logout
  // =========================
  const handleSignOut = async () => {
    if (isLoggingOut) return;

    try {
      setIsLoggingOut(true);

      await authClient.signOut({});

      setIsMenuOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

 
  // Close Mobile Menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  
  // Navigation Links
  const navLinks = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/products",
      label: "Products",
      active: pathname.startsWith("/products"),
    },
    {
      href: "/profile",
      label: "Profile",
      active: pathname === "/profile",
    },
  ];


  // Desktop Navigation Classes
  const getNavClass = (active) => ` relative rounded-lg px-3 py-2 text-md font-bold transition-all duration-200
 focus:outline-none focus:ring-2 focus:ring-emerald-300
    ${
      active
        ? "bg-emerald-100 text-emerald-700"
        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
    }
  `;

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 shadow-sm backdrop-blur-md">
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/*  Logo  */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
          aria-label="SunCart home"
        >
          <Image
            src={logoimg}
            alt="SunCart logo"
            loading="eager"
            width={40}
            height={40}
            className="rounded-full transition-transform duration-300 group-hover:scale-105"
          />

          <span className="text-lg font-extrabold tracking-tight text-gray-900 transition-colors group-hover:text-emerald-600 sm:text-2xl">
            Sun<span className="text-emerald-600">Cart</span>
          </span>
        </Link>

        {/*  Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex ">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={getNavClass(link.active)}
                aria-current={link.active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/*  Desktop Auth Controls */}
        <div className="hidden items-center md:flex">
          {!user ? (
            <div className="flex items-center gap-2">
              {/* Login */}
              <Link
                href="/log"
                className="rounded-lg px-4 py-2 text-md font-bold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Login
              </Link>

              {/* Register */}
              <Link
                href="/login"
                className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                Create Account
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* User Info */}
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                <Avatar size="sm">
                  <Avatar.Image
                    alt={`${user?.name || "User"} avatar`}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>
                    {user?.name?.[0]?.toUpperCase() || "U"}
                  </Avatar.Fallback>
                </Avatar>

                <span className="hidden max-w-[120px] truncate text-sm font-semibold text-gray-700 lg:block">
                  {user?.name || "User"}
                </span>
              </Link>

              {/* Logout */}
              <Button
                type="button"
                color="danger"
                disabled={isLoggingOut}
                onClick={handleSignOut}
                className="rounded-lg px-4 font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoggingOut ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Logging out...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <HiOutlineArrowRightOnRectangle className="h-5 w-5" />
                    Log Out
                  </span>
                )}
              </Button>
            </div>
          )}
        </div>

        {/*  Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="rounded-xl p-2 text-gray-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-300 md:hidden"
        >
          {isMenuOpen ? (
            <HiOutlineXMark className="h-6 w-6" />
          ) : (
            <HiOutlineBars3 className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/*  Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="animate__animated animate__fadeIn border-t border-emerald-100 bg-white px-4 py-4 shadow-lg md:hidden"
        >
          {/* Navigation Links */}
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={link.active ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    link.active
                      ? "bg-emerald-100 text-emerald-700"
                      : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Auth */}
          <div className="mt-4 border-t border-gray-100 pt-4">
            {!user ? (
              <div className="flex flex-col gap-2">
                <Link
                  href="/log"
                  onClick={closeMenu}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                >
                  Login
                </Link>

                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-emerald-200"
                >
                  Create Account
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {/* User */}
                <Link
                  href="/profile"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 transition hover:bg-emerald-50"
                >
                  <Avatar size="sm">
                    <Avatar.Image
                      alt={`${user?.name || "User"} avatar`}
                      src={user?.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>
                      {user?.name?.[0]?.toUpperCase() || "U"}
                    </Avatar.Fallback>
                  </Avatar>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-800">
                      {user?.name || "User"}
                    </p>
                    <p className="truncate text-xs text-gray-500">
                      View profile
                    </p>
                  </div>
                </Link>

                {/* Logout */}
                <Button
                  type="button"
                  color="danger"
                  disabled={isLoggingOut}
                  onClick={handleSignOut}
                  className="w-full rounded-xl font-semibold transition-all active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-red-200 disabled:opacity-60"
                >
                  {isLoggingOut ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Logging out...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <HiOutlineArrowRightOnRectangle className="h-5 w-5" />
                      Log Out
                    </span>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navber;