"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa6";
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import logoimg from "../../../public/logo.png";

// Footer Links
const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: <FaFacebookF />,
    href: "#",
    label: "Facebook",
  },
  {
    icon: <FaInstagram />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <FaXTwitter />,
    href: "#",
    label: "X / Twitter",
  },
];

const shopLinks = [
  { name: "New Arrivals", href: "/products" },
  { name: "Best Sellers", href: "/products" },
  { name: "Sale & Offers", href: "/products" },
  { name: "Trending Items", href: "/products" },
];

const customerServiceLinks = [
  { name: "Track Order", href: "#" },
  { name: "Shipping Policy", href: "#" },
  { name: "Returns & Exchanges", href: "#" },
  { name: "Contact Us", href: "#" },
];

const aboutUsLinks = [
  { name: "Our Story", href: "#" },
  { name: "Sustainability", href: "#" },
  { name: "Store Locator", href: "#" },
  { name: "Careers", href: "#" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const shouldReduceMotion = useReducedMotion();

  // Newsletter Submit
  const handleSubscribe = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulated loading state
    setStatus("loading");
    setMessage("");

    setTimeout(() => {
      setStatus("success");
      setMessage("You're subscribed! Thanks for joining us.");
      setEmail("");
    }, 800);
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-50px",
        }}
        variants={containerVariants}
      >
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand + Newsletter */}
          <motion.div
            variants={itemVariants}
            className="space-y-5 lg:col-span-2"
          >
            {/* Logo */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-emerald-500/30 transition-colors duration-300 group-hover:border-emerald-500">
                <Image
                  src={logoimg}
                  alt="SunCart logo"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400">
                SunCart
                <span className="text-emerald-500">.</span>
              </span>
            </Link>

            {/* Description */}
            <p className="max-w-md text-sm leading-6 text-slate-400">
              Discover quality products delivered to your doorstep. Subscribe to
              our newsletter for the latest updates, exclusive deals, and new
              arrivals.
            </p>

            {/* Newsletter */}
            <div className="pt-1">
              <h3 className="mb-2 text-sm font-semibold text-white">
                Get updates & exclusive deals
              </h3>

              <form
                onSubmit={handleSubscribe}
                className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
              >
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);

                      if (status !== "idle") {
                        setStatus("idle");
                        setMessage("");
                      }
                    }}
                    placeholder="Enter your email"
                    aria-describedby="newsletter-message"
                    disabled={status === "loading"}
                    className="h-11 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-500 hover:border-slate-600 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <motion.button
                  whileHover={shouldReduceMotion ? {} : { y: -1 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:bg-emerald-500 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-400/30 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <FaPaperPlane
                        className="text-xs"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Feedback Message */}
              {message && (
                <motion.div
                  id="newsletter-message"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-3 flex items-start gap-2 text-xs ${
                    status === "success"
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                  role={status === "error" ? "alert" : "status"}
                >
                  {status === "success" ? (
                    <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <HiOutlineExclamationCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  )}

                  <span>{message}</span>
                </motion.div>
              )}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Follow Us
              </span>

              <div className="flex gap-3">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    aria-label={`Visit our ${item.label} page`}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: -3,
                            scale: 1.05,
                          }
                    }
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-400 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Shop */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="border-b border-slate-800 pb-3 text-sm font-bold uppercase tracking-wider text-white">
              Shop
            </h3>

            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-emerald-400 focus:outline-none focus:text-emerald-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="border-b border-slate-800 pb-3 text-sm font-bold uppercase tracking-wider text-white">
              Customer Service
            </h3>

            <ul className="space-y-3">
              {customerServiceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-emerald-400 focus:outline-none focus:text-emerald-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="border-b border-slate-800 pb-3 text-sm font-bold uppercase tracking-wider text-white">
              About Us
            </h3>

            <ul className="space-y-3">
              {aboutUsLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-emerald-400 focus:outline-none focus:text-emerald-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} SunCart Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
            <a
              href="#"
              className="transition-colors hover:text-slate-300 focus:outline-none focus:text-emerald-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-slate-300 focus:outline-none focus:text-emerald-400"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="transition-colors hover:text-slate-300 focus:outline-none focus:text-emerald-400"
            >
              Cookie Preferences
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}