"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Card, Spinner } from "@heroui/react";
import React from "react";
import { UpdateUserModal } from "../components/UpdateUser";
import { motion, useReducedMotion } from "framer-motion";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const shouldReduceMotion = useReducedMotion();

    // Loading state
    if (userData.isPending) {
        return (
            <main className="min-h-[75vh] flex items-center justify-center px-4">
                <div
                    className="flex flex-col items-center gap-3 text-gray-500"
                    role="status"
                    aria-label="Loading profile"
                >
                    <Spinner size="lg" />
                    <p className="text-sm">Loading your profile...</p>
                </div>
            </main>
        );
    }

    // No user state
    if (!user) {
        return (
            <main className="min-h-[75vh] flex items-center justify-center px-4">
                <Card
                    className="
                        w-full
                        max-w-md
                        rounded-2xl
                        border
                        border-gray-200
                        p-8
                        text-center
                        shadow-sm
                        dark:border-gray-800
                    "
                >
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                        Profile Not Available
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Please log in to view your profile information.
                    </p>
                </Card>
            </main>
        );
    }

    return (
        <main
            className="
                min-h-[75vh]
                px-4
                py-8
                sm:py-12
                bg-gradient-to-b
                from-emerald-50/60
                via-white
                to-white
                dark:from-gray-950
                dark:via-gray-950
                dark:to-gray-900
            "
        >
            <div className="mx-auto w-full max-w-2xl">
                {/* Page Heading */}
                <div className="mb-6 text-center">
                    <h1
                        className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                            tracking-tight
                            text-gray-900
                            dark:text-white
                        "
                    >
                        My Profile
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                        Manage your personal information and account details.
                    </p>
                </div>

                {/* Profile Card */}
                <motion.div
                    initial={
                        shouldReduceMotion
                            ? false
                            : { opacity: 0, y: 20 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                    }}
                >
                    <Card
                        className="
                            overflow-hidden
                            rounded-2xl
                            border
                            border-gray-200
                            bg-white
                            shadow-lg
                            dark:border-gray-800
                            dark:bg-gray-900
                        "
                    >
                        {/* Profile Header */}
                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                bg-emerald-50
                                px-6
                                py-8
                                dark:bg-emerald-950/30
                            "
                        >
                            <Avatar
                                className="
                                    h-24
                                    w-24
                                    border-4
                                    border-white
                                    shadow-md
                                    dark:border-gray-800
                                "
                            >
                                <Avatar.Image
                                    alt={`${user.name || "User"} avatar`}
                                    src={user.image || undefined}
                                    referrerPolicy="no-referrer"
                                />

                                <Avatar.Fallback>
                                    {user.name?.[0]?.toUpperCase() || "U"}
                                </Avatar.Fallback>
                            </Avatar>

                            <h2
                                className="
                                    mt-4
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    dark:text-white
                                "
                            >
                                {user.name || "Suncart User"}
                            </h2>

                            <p
                                className="
                                    mt-1
                                    text-sm
                                    text-gray-500
                                    dark:text-gray-400
                                "
                            >
                                {user.email}
                            </p>
                        </div>

                        {/* Account Information */}
                        <div className="px-6 py-6 sm:px-8">
                            <h3
                                className="
                                    mb-4
                                    text-sm
                                    font-semibold
                                    uppercase
                                    tracking-wider
                                    text-gray-500
                                    dark:text-gray-400
                                "
                            >
                                Account Information
                            </h3>

                            <div className="space-y-4">
                                {/* Name */}
                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-gray-100
                                        bg-gray-50
                                        p-4
                                        dark:border-gray-800
                                        dark:bg-gray-800/50
                                    "
                                >
                                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                        Full Name
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                                        {user.name || "Not provided"}
                                    </p>
                                </div>

                                {/* Email */}
                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-gray-100
                                        bg-gray-50
                                        p-4
                                        dark:border-gray-800
                                        dark:bg-gray-800/50
                                    "
                                >
                                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                        Email Address
                                    </p>

                                    <p className="mt-1 break-all text-sm font-semibold text-gray-900 dark:text-white">
                                        {user.email}
                                    </p>
                                </div>
                            </div>

                            {/* Edit Profile */}
                            <div className="mt-6 flex justify-center">
                                <div
                                    className="
                                        w-full
                                        sm:w-auto
                                    "
                                >
                                    <UpdateUserModal />
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </main>
    );
};

export default ProfilePage;