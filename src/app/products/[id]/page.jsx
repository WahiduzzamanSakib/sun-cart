import Image from "next/image";
import React from "react";
import { Button } from "@heroui/react";
import { TiShoppingCart } from "react-icons/ti";
import { MdProductionQuantityLimits } from "react-icons/md";

const CardDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://sun-cart-c2md.vercel.app/data.json", {
        cache: "no-store",
    });
    const data = await res.json();

    const product = data.find((p) => p.id == id);



    return (
        <div>
            <div className="max-w-5xl mx-auto p-6">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <div className="border rounded-lg p-4">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </div>


                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">
                            {product.name}
                        </h1>

                        <p className="text-gray-600 ">
                            {product.description}
                        </p>
                        <p className="text-xl font-semibold  ">
                            Brand:    <span className="text-2xl font-bold ">
                                 {product.brand}
                            </span>
                        </p>

                        <p className="text-2xl font-semibold  flex gap-1 items-center">
                            Stock:
                            <span className="font-bold flex justify-center"><MdProductionQuantityLimits />  {product.stock}</span>
                        </p>
                        <p className="text-2xl font-semibold ">
                            Price:
                            <span className="text-2xl font-bold text-green-600 ml-1">
                                $ {product.price}
                            </span>
                        </p>

                        <div>
                            <Button className="bg-black text-white mr-3 px-6 py-3 rounded-lg hover:bg-gray-800 ">
                                <TiShoppingCart /> Add to Cart
                            </Button>

                            <Button className=" text-white px-8 py-5  rounded-lg hover:bg-gray-800 ">
                                Buy Now
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;