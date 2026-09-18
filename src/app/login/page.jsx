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
import { motion, useReducedMotion } from "framer-motion";

export default function SignUpPage() {
    const router = useRouter();
    const shouldReduceMotion = useReducedMotion();

    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
            setIsGoogleLoading(false);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (isLoading || isGoogleLoading) return;

        setIsLoading(true);

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name")?.toString().trim();
        const image = formData.get("image")?.toString().trim();
        const email = formData.get("email")?.toString().trim();
        const password = formData.get("password")?.toString();

        try {
            const { data, error } = await authClient.signUp.email({
                name,
                email,
                password,
                image: image || undefined,
            });

            if (error) {
                toast.error(
                    error.message || "Registration failed. Please try again."
                );
                setIsLoading(false);
                return;
            }

            toast.success("Account created successfully!");

            router.replace("/");
        } catch (err) {
            console.error("Sign up exception:", err);
            toast.error("Something went wrong. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <main
            className="
                min-h-[85vh]
                flex items-center justify-center
                px-4 py-8 sm:py-12
                bg-gradient-to-b
                from-emerald-50/70
                via-white
                to-white
                dark:from-gray-950
                dark:via-gray-950
                dark:to-gray-900
            "
        >
            <motion.div
                initial={
                    shouldReduceMotion
                        ? false
                        : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-xl"
            >
                <Card
                    className="
                        w-full
                        rounded-2xl
                        border border-gray-200/80
                        dark:border-gray-800
                        bg-white/95
                        dark:bg-gray-900/95
                        p-5 sm:p-8
                        shadow-xl
                    "
                >
                    {/* Header */}
                    <div className="mb-7 text-center">
                        <motion.h1
                            initial={
                                shouldReduceMotion
                                    ? false
                                    : { opacity: 0, y: -10 }
                            }
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.3,
                            }}
                            className="
                                text-2xl
                                sm:text-3xl
                                font-bold
                                tracking-tight
                                text-gray-900
                                dark:text-white
                            "
                        >
                            Create Your Account
                        </motion.h1>

                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Join Suncart and enjoy a better shopping
                            experience.
                        </p>
                    </div>

                    {/* Registration Form */}
                    <Form
                        className="flex w-full flex-col gap-5"
                        onSubmit={onSubmit}
                    >
                        {/* Name */}
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                            className="w-full"
                        >
                            <Label
                                className="
                                    text-sm
                                    font-semibold
                                    text-gray-800
                                    dark:text-gray-200
                                "
                            >
                                Full Name
                            </Label>

                            <Input
                                placeholder="Enter your full name"
                                className="
                                    mt-1
                                    min-h-11
                                "
                                aria-label="Full name"
                            />

                            <FieldError />
                        </TextField>

                        {/* Profile Image */}
                        <TextField
                            name="image"
                            type="url"
                            className="w-full"
                        >
                            <Label
                                className="
                                 isRequired
                                    text-sm
                                    font-semibold
                                    text-gray-800
                                    dark:text-gray-200
                                "
                            >
                                Profile Image URL
                            </Label>

                            <Input
                                placeholder="https://example.com/avatar.jpg"
                                className="mt-1 min-h-11"
                                aria-label="Profile image URL"
                            />

                            <FieldError />
                        </TextField>

                        {/* Email */}
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            className="w-full"
                            validate={(value) => {
                                if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        value
                                    )
                                ) {
                                    return "Please enter a valid email address.";
                                }

                                return null;
                            }}
                        >
                            <Label
                                className="
                                    text-sm
                                    font-semibold
                                    text-gray-800
                                    dark:text-gray-200
                                "
                            >
                                Email Address
                            </Label>

                            <Input
                                placeholder="you@example.com"
                                className="mt-1 min-h-11"
                                aria-label="Email address"
                            />

                            <FieldError />
                        </TextField>

                        {/* Password */}
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type={showPassword ? "text" : "password"}
                            className="w-full"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters.";
                                }

                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter.";
                                }

                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number.";
                                }

                                return null;
                            }}
                        >
                            <Label
                                className="
                                    text-sm
                                    font-semibold
                                    text-gray-800
                                    dark:text-gray-200
                                "
                            >
                                Password
                            </Label>

                            <div className="relative mt-1">
                                <Input
                                    placeholder="Create a strong password"
                                    className="min-h-11 pr-20"
                                    aria-label="Password"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword((prev) => !prev)
                                    }
                                    className="
                                        absolute
                                        right-2
                                        top-1/2
                                        -translate-y-1/2
                                        rounded-md
                                        px-2
                                        py-1
                                        text-xs
                                        font-semibold
                                        text-emerald-600
                                        hover:bg-emerald-50
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-emerald-500
                                        dark:hover:bg-emerald-950
                                    "
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>

                            <Description
                                className="
                                    mt-1
                                    text-xs
                                    leading-5
                                    text-gray-500
                                "
                            >
                                Use at least 8 characters, including 1
                                uppercase letter and 1 number.
                            </Description>

                            <FieldError />
                        </TextField>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                            <motion.div
                                whileHover={
                                    shouldReduceMotion
                                        ? undefined
                                        : { scale: 1.01 }
                                }
                                whileTap={
                                    shouldReduceMotion
                                        ? undefined
                                        : { scale: 0.98 }
                                }
                                className="flex-1"
                            >
                                <Button
                                    type="submit"
                                    color="primary"
                                    isDisabled={
                                        isLoading || isGoogleLoading
                                    }
                                    className="
                                        min-h-11
                                        w-full
                                        rounded-lg
                                        bg-emerald-600
                                        font-semibold
                                        text-white
                                        shadow-md
                                        transition-all
                                        hover:bg-emerald-700
                                        active:scale-[0.98]
                                        focus:ring-2
                                        focus:ring-emerald-500
                                        focus:ring-offset-2
                                        dark:bg-emerald-500
                                        dark:hover:bg-emerald-600
                                    "
                                >
                                    {isLoading ? (
                                        <>
                                            <Spinner
                                                size="sm"
                                                color="white"
                                            />
                                            Creating Account...
                                        </>
                                    ) : (
                                        <>
                                            <Check />
                                            Create Account
                                        </>
                                    )}
                                </Button>
                            </motion.div>

                            <Button
                                type="reset"
                                variant="flat"
                                isDisabled={
                                    isLoading || isGoogleLoading
                                }
                                className="
                                    min-h-11
                                    rounded-lg
                                    font-semibold
                                    sm:px-6
                                "
                            >
                                Reset
                            </Button>
                        </div>
                    </Form>

                    {/* Divider */}
                    <div className="relative my-7">
                        <div className="absolute inset-0 flex items-center">
                            <div
                                className="
                                    w-full
                                    border-t
                                    border-gray-200
                                    dark:border-gray-800
                                "
                            />
                        </div>

                        <div className="relative flex justify-center">
                            <span
                                className="
                                    bg-white
                                    px-3
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-wide
                                    text-gray-400
                                    dark:bg-gray-900
                                "
                            >
                                Or continue with
                            </span>
                        </div>
                    </div>

                    {/* Google Sign Up */}
                    <motion.div
                        whileHover={
                            shouldReduceMotion
                                ? undefined
                                : { scale: 1.01 }
                        }
                        whileTap={
                            shouldReduceMotion
                                ? undefined
                                : { scale: 0.99 }
                        }
                    >
                        <Button
                            type="button"
                            onClick={handleGoogle}
                            variant="bordered"
                            isDisabled={
                                isLoading || isGoogleLoading
                            }
                            className="
                                min-h-11
                                w-full
                                rounded-lg
                                border-gray-300
                                font-semibold
                                transition-colors
                                hover:bg-gray-50
                                active:scale-[0.99]
                                focus:ring-2
                                focus:ring-emerald-500
                                dark:border-gray-700
                                dark:hover:bg-gray-800
                            "
                        >
                            {isGoogleLoading ? (
                                <>
                                    <Spinner size="sm" />
                                    Connecting...
                                </>
                            ) : (
                                <>
                                    <GrGoogle className="text-lg text-green-500" />
                                    Continue with Google
                                </>
                            )}
                        </Button>
                    </motion.div>

                    {/* Footer Note */}
                    <p
                        className="
                            mt-6
                            text-center
                            text-xs
                            leading-5
                            text-gray-500
                            dark:text-gray-400
                        "
                    >
                        By creating an account, you agree to our
                        terms and privacy policy.
                    </p>
                </Card>
            </motion.div>
        </main>
    );
}