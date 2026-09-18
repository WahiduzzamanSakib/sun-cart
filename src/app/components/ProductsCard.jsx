"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Separator } from "@heroui/react";
import { motion, useReducedMotion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

const ProductsCard = ({ data }) => {
    const shouldReduceMotion = useReducedMotion();

    if (!data) return null;

    const price = Number(data.price || 0);
    const rating = Number(data.rating || 0);

    return (
        <motion.div
            initial={
                shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.4,
                ease: "easeOut",
            }}
            whileHover={
                shouldReduceMotion
                    ? undefined
                    : { y: -5 }
            }
            className="h-full w-full"
        >
            <Card
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-900"
            >
                {/* Product Image */}
                <Link
                    href={`/products/${data.id}`}
                    className="relative block w-full overflow-hidden rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-gray-800"
                    aria-label={`View ${data.name || "product"} details`}
                >
                    <div className="relative aspect-square w-full">
                        <Image
                            src={data.image || "/placeholder.png"}
                            alt={data.name || "Product image"}
                            fill
                            sizes="
                                (max-width: 640px) 80vw,
                                (max-width: 1024px) 50vw,
                                25vw
                            "
                            className="object-cover object-center p-3 transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                    </div>

                    {/* Rating */}
                    {data.rating !== undefined &&
                        data.rating !== null && (
                            <div
                                className="absolute right-2.5 top-2.5 flex items-center gap-1.5 rounded-full border border-white/60 bg-white/95 px-2.5 py-1 shadow-sm backdrop-blur-md dark:border-gray-700dark:bg-gray-900/95"
                                aria-label={`Rating ${rating.toFixed(1)} out of 5`}
                            >
                                <FaStar className="text-xs text-amber-400" />

                                <span
                                    className="text-xs font-bold text-gray-800 dark:text-gray-200"
                                >
                                    {rating.toFixed(1)}
                                </span>
                            </div>
                        )}

                    {/* View Product Hint */}
                    <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/50 to-transparent px-3 pb-3 pt-8 sm:block opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                        <span className="text-xs font-medium text-white">
                            View product
                        </span>
                    </div>
                </Link>

                {/* Product Information */}
                <div className="flex flex-1 flex-col px-1 pt-4">
                    {/* Category */}
                    {data.category && (
                        <span
                            className="w-fit rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
                        >
                            {data.category}
                        </span>
                    )}

                    {/* Product Name */}
                    <Link
                        href={`/products/${data.id}`}
                        className="rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                        <h3
                            className="line-clamp-2 min-h-[3rem] text-base font-semibold leading-6 text-gray-900 transition-colors duration-200 group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400"
                        >
                            {data.name || "Unnamed Product"}
                        </h3>
                    </Link>

                    <Separator
                        className="mb-3 bg-gray-100 dark:bg-gray-800"
                    />

                    {/* Price */}
                    <div className="mb-4">
                        <span
                            className="text-[11px] font-medium uppercase tracking-wider text-gray-400"
                        >
                            Price
                        </span>

                        <p
                            className="mt-0.5 text-xl font-black leading-tight text-gray-900 dark:text-white"
                        >
                            $
                            {price.toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                        <Link
                            href={`/products/${data.id}`}
                            className="block w-full"
                        >
                            <Button
                                className="min-h-11 w-full rounded-xl bg-gray-900 px-4 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-emerald-600 active:scale-[0.98] focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-gray-800 dark:hover:bg-emerald-600"
                            >
                                <span>View Details</span>

                                <HiArrowRight
                                    className=" h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

export default ProductsCard;