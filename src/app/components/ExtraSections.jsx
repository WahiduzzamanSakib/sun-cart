"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSun, FiDroplet, FiShield } from "react-icons/fi";

// অ্যানিমেশন ভ্যারিয়েন্ট (সহজে পুনরায় ব্যবহারের জন্য)
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (index = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.15,
            ease: [0.25, 0.1, 0.25, 1.0],
        },
    }),
};

const summerTips = [
    {
        icon: <FiSun className="w-6 h-6 text-orange-600" />,
        title: "Skincare",
        description:
            "Apply SPF 30+ every 2 hours. Your skin will thank you for the extra shield against harmful UV rays.",
    },
    {
        icon: <FiDroplet className="w-6 h-6 text-orange-600" />,
        title: "Stay Hydrated",
        description:
            "Drink at least 3 liters of water daily. Infuse with lemon or mint for a refreshing summer twist.",
    },
    {
        icon: <FiShield className="w-6 h-6 text-orange-600" />,
        title: "Wear Protection",
        description:
            "Wide-brimmed hats and polarized sunglasses are not just style statements—they are essential.",
    },
];

const brands = [
    { name: "GLOW CO." },
    { name: "AQUA" },
    { name: "DERMA+" },
    { name: "ZARA" },
];

export default function ExtraSections() {
    return (
        <div className="container mx-auto my-12 px-4 space-y-16">
            {/* Summer Care Tips Section */}
            <section className="py-16 px-6 sm:px-12 bg-gradient-to-br from-orange-50/80 via-amber-50/40 to-orange-100/50 rounded-3xl border border-orange-100/60 shadow-sm relative overflow-hidden">
                {/* ব্যাকগ্রাউন্ডের হালকা অ্যানিমেটেড ডেকোরেশন */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        custom={0}
                        variants={fadeInUp}
                        className="text-center mb-12 space-y-2"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                            Essential Advice
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Summer Care Tips
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {summerTips.map((tip, index) => (
                            <motion.div
                                key={tip.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                custom={index + 1}
                                variants={fadeInUp}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-orange-100/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start group"
                            >
                                <div className="p-3 bg-orange-100/70 rounded-xl mb-5 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                    {React.cloneElement(tip.icon, {
                                        className:
                                            "w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300",
                                    })}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                                    {tip.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {tip.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Brands Section */}
            <section className="py-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        custom={0}
                        variants={fadeInUp}
                        className="text-center mb-10 space-y-2"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                            Partners
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Top Brands
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={brand.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                custom={index + 1}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="h-36 flex items-center justify-center bg-gray-50/80 hover:bg-white rounded-2xl border border-gray-100 hover:border-orange-200 shadow-xs hover:shadow-md cursor-pointer transition-all duration-300 group"
                            >
                                <span className="text-2xl sm:text-3xl font-black text-gray-400 group-hover:text-gray-900 transition-colors duration-300 tracking-wider">
                                    {brand.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}