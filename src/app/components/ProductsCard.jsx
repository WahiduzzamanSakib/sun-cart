import { Button, Card, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductsCard = ({ data }) => {
    return (
        <div className="container mx-auto flex justify-center items-center ">
            <Card className="p-6  hover:shadow-xl">
                <div className="relative w-60 h-50">
                    <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className="p-4 rounded-lg"
                    />
                </div>


                <div className="mt-3">
                    <h2 className="text-lg font-bold">{data.name}</h2>

                     <Separator className="my-3"/>

                    <div className="flex justify-between">
                        <p className="font-bold mt-2">$ {data.price}</p>
                        <p className="flex justify-center items-center font-bold mt-2 text-red-500">
                            <FaStar /> <span className="ml-2">{data.rating}</span></p>
                    </div>
                </div>
               <Link href={`/products/${data.id}`}>
                <Button  className="w-full mt-3">
                    View Details
                </Button>
                </Link>
            </Card>
        </div>
    );
};

export default ProductsCard;