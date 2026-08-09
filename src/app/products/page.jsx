
import React from 'react';
import ProductsCard from '../components/ProductsCard';

const Products = async () => {
    const res = await fetch(`${process.env.BETTER_AUTH_URL}/data.json`, {
        cache: "no-store",
    });
    const item = await res.json();
   

    return (
        <div className='bg-blue-200 p-2'>
            <h2 className="text-3xl font-bold my-5 text-center">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
                {item.map(item => (
                    <ProductsCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Products;