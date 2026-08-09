import React from 'react';
import ProductsCard from './ProductsCard';


const PopularProducts = async () => {
    const res = await fetch(`${process.env.BETTER_AUTH_URL}/data.json`, {
        cache: "no-store",
    });

    const data = await res.json();
    const topData = data.sort((a, b) => b.rating - a.rating).slice(0, 3);

    return (
        <div className='bg-blue-100 p-3'>
            <h1 className="text-3xl font-bold my-5 text-center">
                Popular Products
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto ">
                {topData.map(item => (
                    <ProductsCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default PopularProducts;