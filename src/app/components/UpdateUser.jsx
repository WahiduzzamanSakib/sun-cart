"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    Input,
    Label,
    Modal,
    TextField,
    Description,
    Spinner,
} from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import { toast } from "react-toastify";

export function UpdateUserModal() {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e, close) => {
        e.preventDefault();

        if (isLoading) return;

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name")?.toString().trim();
        const image = formData.get("image")?.toString().trim();

        // Basic validation
        if (!name) {
            toast.error("Please enter your name.");
            return;
        }

        if (name.length < 2) {
            toast.error("Name must be at least 2 characters.");
            return;
        }

        if (image && !/^https?:\/\/.+/i.test(image)) {
            toast.error("Please enter a valid image URL.");
            return;
        }

        setIsLoading(true);

        try {
            const { error } = await authClient.updateUser({
                name,
                image: image || "",
            });

            if (error) {
                toast.error(
                    error.message || "Failed to update profile."
                );
                return;
            }

            toast.success("Profile updated successfully!");
            close();
        } catch (err) {
            console.error("Profile update error:", err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal>
            {/* Trigger */}
            <Button
                variant="secondary"
                className="
                    min-h-11
                    w-full
                    rounded-lg
                    border
                    border-emerald-200
                    bg-emerald-50
                    px-5
                    font-semibold
                    text-emerald-700
                    transition-all
                    hover:bg-emerald-100
                    active:scale-[0.98]
                    focus:ring-2
                    focus:ring-emerald-500
                    focus:ring-offset-2
                    sm:w-auto
                    dark:border-emerald-900
                    dark:bg-emerald-950/40
                    dark:text-emerald-300
                    dark:hover:bg-emerald-950/70
                "
            >
                <BiEdit className="size-5" />
                Edit Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="w-full sm:max-w-md">
                        {({ close }) => (
                            <>
                                {/* Close */}
                                <Modal.CloseTrigger />

                                {/* Header */}
                                <Modal.Header className="border-b border-gray-100 dark:border-gray-800">
                                    <Modal.Icon
                                        className="
                                            bg-emerald-100
                                            text-emerald-700
                                            dark:bg-emerald-950
                                            dark:text-emerald-300
                                        "
                                    >
                                        <BiUser className="size-5" />
                                    </Modal.Icon>

                                    <div>
                                        <Modal.Heading>
                                            Edit Profile
                                        </Modal.Heading>

                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            Update your personal information.
                                        </p>
                                    </div>
                                </Modal.Header>

                                {/* Body */}
                                <Modal.Body className="p-5 sm:p-6">
                                    <form
                                        onSubmit={(e) =>
                                            onSubmit(e, close)
                                        }
                                        className="flex flex-col gap-5"
                                    >
                                        {/* Name */}
                                        <TextField
                                            isRequired
                                            className="w-full"
                                            name="name"
                                            type="text"
                                            defaultValue={
                                                user?.name || ""
                                            }
                                        >
                                            <Label className="text-sm font-semibold">
                                                Full Name
                                            </Label>

                                            <Input
                                                placeholder="Enter your full name"
                                                className="mt-1 min-h-11"
                                                autoComplete="name"
                                            />

                                            <Description className="mt-1 text-xs text-gray-500">
                                                This name will be displayed
                                                on your profile.
                                            </Description>
                                        </TextField>

                                        {/* Image */}
                                        <TextField
                                            className="w-full"
                                            name="image"
                                            type="url"
                                            defaultValue={
                                                user?.image || ""
                                            }
                                        >
                                            <Label className="text-sm font-semibold">
                                                Profile Image URL
                                                <span className="ml-1 font-normal text-gray-400">
                                                    (Optional)
                                                </span>
                                            </Label>

                                            <Input
                                                placeholder="https://example.com/avatar.jpg"
                                                className="mt-1 min-h-11"
                                                autoComplete="url"
                                            />

                                            <Description className="mt-1 text-xs text-gray-500">
                                                Use a public image URL.
                                            </Description>
                                        </TextField>

                                        {/* Footer */}
                                        <Modal.Footer className="mt-1 flex flex-col gap-2 p-0 sm:flex-row sm:justify-end">
                                            <Button
                                                slot="close"
                                                variant="secondary"
                                                isDisabled={isLoading}
                                                className="
                                                    min-h-11
                                                    w-full
                                                    rounded-lg
                                                    font-semibold
                                                    sm:w-auto
                                                "
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                isDisabled={isLoading}
                                                className="
                                                    min-h-11
                                                    w-full
                                                    rounded-lg
                                                    bg-emerald-600
                                                    px-6
                                                    font-semibold
                                                    text-white
                                                    shadow-sm
                                                    transition-all
                                                    hover:bg-emerald-700
                                                    active:scale-[0.98]
                                                    focus:ring-2
                                                    focus:ring-emerald-500
                                                    focus:ring-offset-2
                                                    dark:bg-emerald-500
                                                    dark:hover:bg-emerald-600
                                                    sm:w-auto
                                                "
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <Spinner
                                                            size="sm"
                                                            color="white"
                                                        />
                                                        Saving...
                                                    </>
                                                ) : (
                                                    <>
                                                        <BiEdit className="size-5" />
                                                        Save Changes
                                                    </>
                                                )}
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Modal.Body>
                            </>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}