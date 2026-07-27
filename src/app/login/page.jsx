"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
    Spinner,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function SignUpPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    const handleGoogle = async () => {
        try {
            setIsGoogleLoading(true);
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (error) {
            console.error("Google sign-in error:", error);
            toast.error("Failed to authenticate with Google.");
        } finally {
            setIsGoogleLoading(false);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const image = formData.get("image");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const { data, error } = await authClient.signUp.email({
                name,
                email,
                password,
                image,
            });

            if (error) {
                toast.error(error.message || "Registration failed. Please try again.");
                setIsLoading(false);
                return;
            }

            toast.success("Account created successfully!");
            window.location.href = "/";
        } catch (err) {
            console.error("Sign up exception:", err);
            toast.error("An unexpected error occurred.");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4 py-8 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-950 dark:to-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
               className="w-full sm:max-w-[60%]"
            >
                <Card className="border border-gray-200/80 dark:border-gray-800 shadow-xl backdrop-blur-md bg-white/90 dark:bg-gray-900/90 p-6 sm:p-8 rounded-2xl">
                    <div className="text-center mb-6 space-y-1">
                        <motion.h1 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Create an Account
                        </motion.h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Join Suncart today to manage your preferences
                        </p>
                    </div>

                    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
                        <TextField isRequired name="name" type="text" className="w-full">
                            <Label className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Name</Label>
                            <Input placeholder="Enter your full name" className="mt-1" />
                            <FieldError />
                        </TextField>

                        <TextField name="image" type="text" className="w-full">
                            <Label className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Profile Image URL</Label>
                            <Input placeholder="https://example.com/avatar.jpg" className="mt-1" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            className="w-full"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Email Address</Label>
                            <Input placeholder="john@example.com" className="mt-1" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            className="w-full"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Password</Label>
                            <Input placeholder="Create a strong password" className="mt-1" />
                            <Description className="text-xs text-gray-500 mt-1">
                                Must be 8+ chars with 1 uppercase & 1 number
                            </Description>
                            <FieldError />
                        </TextField>

                        <div className="flex gap-3 pt-2">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                                <Button
                                    type="submit"
                                    color="primary"
                                    isDisabled={isLoading || isGoogleLoading}
                                    className="w-full font-semibold shadow-md bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <Spinner size="sm" color="white" />
                                    ) : (
                                        <>
                                            <Check />
                                            Register
                                        </>
                                    )}
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    type="reset"
                                    variant="flat"
                                    isDisabled={isLoading || isGoogleLoading}
                                    className="font-medium"
                                >
                                    Reset
                                </Button>
                            </motion.div>
                        </div>
                    </Form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-800" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-gray-900 px-3 text-gray-400 font-medium">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button
                            onClick={handleGoogle}
                            variant="bordered"
                            isDisabled={isLoading || isGoogleLoading}
                            className="w-full font-medium border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center gap-2 transition-colors"
                        >
                            {isGoogleLoading ? (
                                <Spinner size="sm" />
                            ) : (
                                <>
                                    <GrGoogle className="text-lg text-red-500" /> Sign in with Google
                                </>
                            )}
                        </Button>
                    </motion.div>
                </Card>
            </motion.div>
        </div>
    );
}