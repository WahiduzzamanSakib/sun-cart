"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import { toast } from "react-toastify";

export function UpdateUserModal() {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e, close) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        setIsLoading(true);
        try {
            const { data, error } = await authClient.updateUser({
                name,
                image
            });

            if (error) {
                toast.error(error.message || "Failed to update profile.");
            } else {
                toast.success("Profile updated successfully!");
                close();
            }
        } catch (err) {
            console.error(err);
            toast.error("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal>
            <Button variant="secondary">
                <BiEdit /> Update Profile
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        {({ close }) => (
                            <>
                                <Modal.CloseTrigger />
                                <Modal.Header>
                                    <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                        <BiUser className="size-5" />
                                    </Modal.Icon>
                                    <Modal.Heading>Update User</Modal.Heading>
                                </Modal.Header>
                                <Modal.Body className="p-6">
                                    <Surface variant="default">
                                        <form onSubmit={(e) => onSubmit(e, close)} className="flex flex-col gap-4">
                                            <TextField className="w-full" name="name" type="text" defaultValue={user?.name || ""}>
                                                <Label>Name</Label>
                                                <Input placeholder="Enter your name" />
                                            </TextField>
                                            <TextField className="w-full" name="image" type="url" defaultValue={user?.image || ""}>
                                                <Label>Image URL</Label>
                                                <Input placeholder="Image URL" />
                                            </TextField>

                                            <Modal.Footer>
                                                <Button slot="close" variant="secondary" isDisabled={isLoading}>
                                                    Cancel
                                                </Button>
                                                <Button type="submit" isDisabled={isLoading}>
                                                    {isLoading ? "Saving..." : "Save"}
                                                </Button>
                                            </Modal.Footer>
                                        </form>
                                    </Surface>
                                </Modal.Body>
                            </>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

