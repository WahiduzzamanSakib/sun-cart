"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {Button, Card, Description, FieldError, Form, Input, Label, TextField,} from "@heroui/react";

import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { HiOutlineArrowRightOnRectangle, HiOutlineEye, HiOutlineEyeSlash,} from "react-icons/hi2";

import { toast } from "react-toastify";

export default function SignInPage() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Google Login
    const handleGoogle = async () => {
        try {
            setIsGoogleLoading(true);

            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (error) {
            console.error(error);
            toast.error("Google sign-in failed. Please try again.");
            setIsGoogleLoading(false);
        }
    };

    // Email & Password Login
    const onSubmit = async (e) => {
        e.preventDefault();

        if (isLoading) return;

        const email = e.target.email.value.trim();
        const password = e.target.password.value;

        try {
            setIsLoading(true);

            const { data, error } = await authClient.signIn.email({
                email,
                password,
            });

            console.log({ data, error });

            if (error) {
                toast.error(
                    error.message || "Invalid email or password. Please try again."
                );
                return;
            }

            toast.success("Logged in successfully!");

            router.replace("/");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-10 sm:py-14 border border-emerald-400">
            <Card
                className="mx-auto w-full max-w-md border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-900/5 sm:p-8"
            >
                {/* Header */}
                <div className="mb-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                        <HiOutlineArrowRightOnRectangle className="h-6 w-6" />
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        Log in to continue shopping with SunCart.
                    </p>
                </div>

                {/* Login Form */}
                <Form
                    className="flex w-full flex-col gap-5"
                    onSubmit={onSubmit}
                >
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
                        <Label className="text-sm font-medium text-gray-700">
                            Email Address
                        </Label>

                        <Input
                            placeholder="john@example.com"
                            className="mt-1 w-full rounded-xl border-gray-200 transition focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100"
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
                        <Label className="text-sm font-medium text-gray-700">
                            Password
                        </Label>

                        <div className="relative mt-1">
                            <Input
                                placeholder="Enter your password"
                                className="w-full rounded-xl border-gray-200 pr-12 transition focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword((prev) => !prev)
                                }
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                                className=" flex justify-center items-center absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                            >
                                {showPassword ? (
                                    <HiOutlineEyeSlash className="h-5 w-5" />
                                ) : (
                                    <HiOutlineEye className="h-5 w-5" />
                                )}
                            </button>
                        </div>

                        <Description className="mt-1 text-xs leading-5 text-gray-500">
                            At least 8 characters, 1 uppercase letter and 1
                            number.
                        </Description>

                        <FieldError />
                    </TextField>

                    {/* Forgot Password */}
                    <div className="flex w-full justify-end">
                        <button
                            type="button"
                            className="text-sm font-medium text-emerald-600 transition hover:text-emerald-700 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 rounded"
                        >
                            Forgot password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="h-12 w-full rounded-xl bg-emerald-600 text-base font-semibold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:opacity-60
                        "
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                Logging in...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <HiOutlineArrowRightOnRectangle className="h-5 w-5" />
                                Log In
                            </span>
                        )}
                    </Button>
                </Form>

                {/*Divider */}
                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />

                    <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                        OR
                    </span>

                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/*  Google Login */}
                <Button
                    type="button"
                    variant="bordered"
                    disabled={isGoogleLoading}
                    onClick={handleGoogle}
                    className=" h-12 w-full rounded-xl border-gray-200 bg-white text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-60
                    "
                >
                    {isGoogleLoading ? (
                        <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-700" />
                            Connecting...
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            <GrGoogle className="h-4 w-4" />
                            Continue with Google
                        </span>
                    )}
                </Button>

                {/*  Footer Text */}
                <p className="mt-6 text-center text-xs leading-5 text-gray-500">
                    By continuing, you agree to our terms and privacy policy.
                </p>
            </Card>
        </main>
    );
}