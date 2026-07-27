'use client'

import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineSparkles } from 'react-icons/hi2';

export default function Banner() {
    // Animation variants for staggered text entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: 'easeOut' } 
        },
    };

    return (
        <section className="bg-gradient-to-r from-green-50 via-emerald-50/60 to-teal-50 py-10 md:py-16 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/60 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-green-100 shadow-xl shadow-green-900/5">
                    
                    {/* Left Column - Copy & CTA */}
                    <motion.div 
                        className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Hot Deal Badge */}
                        <motion.div variants={itemVariants}>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                <HiOutlineSparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
                                🔥 Hot Deals • Limited Time
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2 
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight"
                        >
                            Summer Essentials <br className="hidden sm:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                Store Sale
                            </span>
                        </motion.h2>

                        {/* Discount Banner */}
                        <motion.div variants={itemVariants} className="space-y-1">
                            <p className="text-2xl sm:text-3xl font-bold text-emerald-600">
                                Up to <span className="text-4xl sm:text-5xl font-black text-orange-500">50% OFF</span>
                            </p>
                            <p className="text-gray-500 text-sm sm:text-base max-w-md">
                                Refresh your collection with top summer picks at unbeatable prices.
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div variants={itemVariants} className="pt-2">
                            <Link href="/products">
                                <Button 
                                    color="success"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 rounded-2xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all transform hover:-translate-y-0.5 group flex items-center gap-2 text-base"
                                >
                                    <span>Shop Now</span>
                                    <HiOutlineArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image Card with Hover Zoom */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
                    >
                        <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px]">
                            <Image
                                src="/istockphoto.jpg"
                                alt="Summer Essentials Banner"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* Subtle Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}