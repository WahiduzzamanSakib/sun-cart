import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const Banner = () => {
    return (
        <div className="container mx-auto relative overflow-hidden rounded-lg shadow-2xl min-h-120 flex items-center my-3">
            <Image
                src="/banner.jpg"
                alt="Summer Essentials Banner"
                fill
                priority
                className="object-cover -z-10"
            />

            <div className="absolute inset-0 bg-black/40 -z-10" />

            <div className="w-full p-6 md:p-12">
                <div className="max-w-7xl mx-auto text-white">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl">
                        <i>Summer Sale</i>
                    </h1>
                    <p className="lg:text-5xl text-3xl  font-bold mb-8  text-gray-300">
                        🔥Hot Deals🔥
                    </p>

                    <p className="lg:text-5xl text-3xl font-bold mb-8 text-gray-300 italic 
            [animation:shakeX_2s_infinite]
             drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] 
             inline-block">
                        Sale 50% OFF🔥
                    </p>

                    <div className="flex gap-4">
                        <Link href={"/products"}>
                            <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white px-8 h-12 font-medium">
                                Shop Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;