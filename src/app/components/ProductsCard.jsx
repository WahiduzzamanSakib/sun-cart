'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Separator } from "@heroui/react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

const ProductsCard = ({ data }) => {
    if (!data) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="w-full h-full"
        >
            <Card className="group flex flex-col justify-between h-full p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                
                <div>
                    {/* Image Container */}
                    <div className="relative w-full aspect-square bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden mb-4">
                        <Image
                            src={data.image || "/placeholder.png"}
                            alt={data.name || "Product image"}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover object-center p-3 transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        
                        {/* Rating Badge Overlay */}
                        {data.rating && (
                            <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-gray-100 dark:border-gray-800">
                                <FaStar className="text-amber-400 text-xs" />
                                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                                    {Number(data.rating).toFixed(1)}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="px-1">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {data.name}
                        </h3>

                        {/* Used Separator component as defined in HeroUI */}
                        <Separator className="my-3 bg-gray-100 dark:bg-gray-800" />

                        {/* Price Display */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-xs text-gray-400 uppercase tracking-wider block">Price</span>
                                <p className="text-lg font-black text-gray-900 dark:text-white">
                                    ${Number(data.price || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </p>
                            </div>

                            {data.category && (
                                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-300 px-2.5 py-1 rounded-md">
                                    {data.category}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Call to Action Button */}
                <div className="pt-2">
                    <Link href={`/products/${data.id}`} className="block w-full">
                        <Button 
                            className="w-full bg-gray-900 hover:bg-emerald-600 text-white font-medium rounded-xl py-5 shadow-sm transition-all duration-300 group/btn flex items-center justify-center gap-2"
                        >
                            <span>View Details</span>
                            <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Button>
                    </Link>
                </div>

            </Card>
        </motion.div>
    );
};

export default ProductsCard;