'use client';

import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineSparkles } from 'react-icons/hi2';

export default function Banner() {
    const shouldReduceMotion = useReducedMotion();

    // Staggered text animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
                delayChildren: shouldReduceMotion ? 0 : 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: shouldReduceMotion ? 0 : 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section
            aria-labelledby="summer-sale-title"
            className="overflow-hidden bg-gradient-to-r from-green-50 via-emerald-50/60 to-teal-50 py-8 sm:py-10 md:py-16"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-green-100 bg-white/70 p-5 shadow-xl shadow-green-900/5 backdrop-blur-md sm:p-8 md:p-10 lg:grid-cols-2 lg:gap-12">
                    <motion.div
                        className="flex flex-col items-center space-y-4 text-center sm:space-y-5 lg:items-start lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                    >
                        {/* Sale Badge */}
                        <motion.div variants={itemVariants}>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-100 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 sm:text-sm">
                                <HiOutlineSparkles
                                    aria-hidden="true"
                                    className="h-4 w-4 text-emerald-600"
                                />
                                <span>🔥 Hot Deals • Limited Time</span>
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2
                            id="summer-sale-title"
                            variants={itemVariants}
                            className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
                        >
                            Summer Essentials
                            <br className="hidden sm:inline" />
                            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Store Sale
                            </span>
                        </motion.h2>

                        {/* Discount + Description */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-2"
                        >
                            <p className="text-xl font-bold text-emerald-600 sm:text-2xl md:text-3xl">
                                Up to{' '}
                                <span className="text-3xl font-black text-orange-500 sm:text-4xl md:text-5xl">
                                    50% OFF
                                </span>
                            </p>

                            <p className="mx-auto max-w-md text-sm leading-6 text-gray-600 sm:text-base lg:mx-0">
                                Refresh your collection with top summer picks at
                                unbeatable prices.
                            </p>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full pt-1 sm:w-auto"
                        >
                            <Link
                                href="/products"
                                aria-label="Shop summer deals and view all products"
                                className="block w-full sm:w-auto"
                            >
                                <Button
                                    color="success"
                                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-7 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/40 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-offset-2 sm:w-auto"
                                >
                                    <span>Shop Summer Deals</span>

                                    <HiOutlineArrowRight
                                        aria-hidden="true"
                                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Small trust/urgency text */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xs text-gray-500 sm:text-sm"
                        >
                            ✨ Limited-time offers • Easy shopping
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: shouldReduceMotion ? 1 : 0.95,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 0.6,
                            ease: 'easeOut',
                            delay: shouldReduceMotion ? 0 : 0.2,
                        }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-2xl shadow-md transition-shadow duration-500 hover:shadow-2xl"
                    >
                        <div className="relative h-[250px] w-full sm:h-[320px] md:h-[380px] lg:h-[420px]">
                            <Image
                                src="/istockphoto.jpg"
                                alt="Summer essentials collection available with discounts up to 50 percent"
                                fill
                                priority
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                                className="rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Image Overlay */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />

                            {/* Image Sale Badge */}
                            <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm sm:bottom-5 sm:left-5">
                                <p className="text-xs font-medium text-gray-600">
                                    Summer Collection
                                </p>

                                <p className="text-lg font-bold text-emerald-700">
                                    Up to 50% OFF
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}