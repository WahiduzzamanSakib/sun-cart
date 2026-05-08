"use client";

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
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { GrGithub, GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";



export default function SignInPage() {

    const router = useRouter()
    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleGithub = async () => {
        await authClient.signIn.social({
            provider: "github",
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();


        const email = e.target.email.value;
        const password = e.target.password.value;



        const { data, error } = await authClient.signIn.email({
            email,
            password
        });




        console.log({ data, error })

        if (error) {
            toast.error("Log In failed");
            return;
        }

        toast.success("Log In successfully!");
        router.replace("/")

    };

    return (
        <Card className="border mx-auto w-full max-w-md px-4 sm:px-6 py-6 sm:py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Log in</h1>

            <Form className="flex w-full mx-auto flex-col gap-4" onSubmit={onSubmit}>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
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
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex  sm:flex-row gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="forget" variant="secondary">
                        Forget
                    </Button>
                </div>
            </Form>

            <p className="text-center"> OR </p>
            <Button onClick={handleGoogle} variant="outline" className="w-full">
                <GrGoogle /> Sign in with Google
            </Button>
        
            <Button onClick={handleGithub} variant="outline" className="w-full">
                <GrGithub /> Sign in with Github
            </Button>

        </Card>
    );
}