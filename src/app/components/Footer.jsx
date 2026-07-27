"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa6";
import logoimg from "../../../public/logo.png";

// Framer Motion Variants
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const socialLinks = [
  { icon: <FaLinkedinIn />, href: "#linkedin", label: "LinkedIn" },
  { icon: <FaFacebookF />, href: "#facebook", label: "Facebook" },
  { icon: <FaInstagram />, href: "#instagram", label: "Instagram" },
  { icon: <FaXTwitter />, href: "#twitter", label: "Twitter" },
];

const shopLinks = [
  { name: "New Arrivals", href: "#" },
  { name: "Best Sellers", href: "#" },
  { name: "Sale & Offers", href: "#" },
  { name: "Trending Items", href: "#" },
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

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-16 pt-16 pb-8 transition-colors duration-300">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand & Newsletter Section (Spans 2 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-orange-500/30 group-hover:border-orange-500 transition-colors">
                <Image
                  src={logoimg}
                  alt="Suncart Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight group-hover:text-orange-500 transition-colors">
                Suncart<span className="text-orange-500">.</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Discover quality products delivered to your doorstep. Join our newsletter to receive the latest updates, exclusive deals, and new arrivals directly in your inbox.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="mt-4 flex max-w-md gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full bg-slate-800/80 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-xl border border-slate-700/60 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-md shadow-orange-600/20"
              >
                <span>Subscribe</span>
                <FaPaperPlane className="text-xs" />
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                Follow Us
              </span>
              <div className="flex gap-3">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    aria-label={item.label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all duration-300"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 1: Shop */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Shop
            </h3>
            <ul className="space-y-3 text-sm">
              {shopLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Customer Service */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Customer Service
            </h3>
            <ul className="space-y-3 text-sm">
              {customerServiceLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: About Us */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              About Us
            </h3>
            <ul className="space-y-3 text-sm">
              {aboutUsLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 hover:translate-x-1 inline-block transition-all duration-200"
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
          className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500"
        >
          <p>&copy; {new Date().getFullYear()} Suncart Ltd. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Cookie Preferences
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}