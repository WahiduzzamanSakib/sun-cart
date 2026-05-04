import React from 'react';


const ExtraSections = () => {
    return (
        <div className='container mx-auto my-4'>
            <section className="py-12 bg-orange-50 rounded-md">
                <div className="max-container px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Summer Care Tips</h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-white p-6 rounded-2xl shadow-sm  hover:shadow-lg ">
                            <h3 className="text-xl font-bold mb-2 text-orange-600">Skincare</h3>
                            <p className="text-gray-600 text-sm">Apply SPF 30+ every 2 hours. Your skin will thank you for the extra shield against UV rays.</p>
                        </div>


                        <div className="bg-white p-6 rounded-2xl shadow-sm  hover:shadow-lg ">
                            <h3 className="text-xl font-bold mb-2 text-orange-600">Stay Hydrated</h3>
                            <p className="text-gray-600 text-sm">Drink at least 3 liters of water. Infuse with lemon or mint for a refreshing summer twist.</p>
                        </div>


                        <div className="bg-white p-6 rounded-2xl shadow-sm  hover:shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-orange-600">Wear Protection</h3>
                            <p className="text-gray-600 text-sm">Wide brimmed hats and polarized sunglasses are not just style they are essentials.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-container px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top Brands</h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                        <div className=" h-40 flex items-center justify-center bg-gray-100 rounded-xl  cursor-pointer">
                            <span className=" text-3xl font-bold text-gray-400  hover:text-black">GLOW CO.</span>
                        </div>
                        <div className=" h-40 flex items-center justify-center bg-gray-100 rounded-xl  cursor-pointer">
                            <span className=" text-3xl font-bold text-gray-400  hover:text-black">AQUA</span>
                        </div>
                        <div className=" h-40 flex items-center justify-center bg-gray-100 rounded-xl  cursor-pointer">
                            <span className=" text-3xl font-bold text-gray-400  hover:text-black">DERMA+</span>
                        </div>
                        <div className=" h-40 flex items-center justify-center bg-gray-100 rounded-xl  cursor-pointer">

                            <span className=" text-3xl font-bold text-gray-400  hover:text-black">ZARA</span>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraSections;