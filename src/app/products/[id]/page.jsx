import Image from "next/image";
import React from "react";
import { Button } from "@heroui/react";
import { TiShoppingCart } from "react-icons/ti";
import { MdProductionQuantityLimits } from "react-icons/md";

const CardDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.BETTER_AUTH_URL}/data.json`, {
    cache: "no-store",
  });

  const data = await res.json();
  const product = data.find((p) => p.id == id);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f7f5] px-4">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            404
          </p>
          <h2 className="text-3xl font-semibold text-gray-900">
            Product not found
          </h2>
          <p className="mt-3 text-gray-500">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= MAIN CARD ================= */}
        <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            
            {/* ================= IMAGE SIDE ================= */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="group relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-2xl border border-black/[0.04] bg-[#f5f5f3] sm:min-h-[450px] lg:min-h-[580px]">
                
                {/* Background glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl transition-transform duration-700 group-hover:scale-125 sm:h-80 sm:w-80" />

                {/* Image */}
                <div className="relative z-10 flex h-full w-full items-center justify-center p-6 sm:p-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    priority
                    className="h-auto max-h-[330px] w-full max-w-[430px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-105 sm:max-h-[420px] sm:max-w-[500px]"
                  />
                </div>

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/[0.04] to-transparent" />

                {/* Image label */}
                <div className="absolute left-4 top-4 z-20 rounded-full bg-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  Premium
                </div>
              </div>
            </div>

            {/* ================= DETAILS SIDE ================= */}
            <div className="flex flex-col justify-center px-5 pb-7 sm:px-8 sm:pb-8 lg:px-10 lg:py-10 xl:px-12">
              
              {/* Brand */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                  <span className="h-px w-5 bg-gray-400" />
                  {product.brand}
                </span>
              </div>

              {/* Title */}
              <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-gray-950 sm:text-4xl xl:text-5xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-3">
                <div className="flex gap-0.5 text-sm text-orange-400">
                  ★ ★ ★ ★ ★
                </div>
                <span className="text-xs text-gray-400 sm:text-sm">
                  4.9 · 128 reviews
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                {product.description}
              </p>

              {/* Price */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                  ${product.price}
                </span>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  In Stock
                </span>
              </div>

              {/* Stock */}
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <MdProductionQuantityLimits className="text-lg text-gray-700" />
                <span>
                  Only{" "}
                  <strong className="font-semibold text-gray-900">
                    {product.stock}
                  </strong>{" "}
                  items available
                </span>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gray-100" />

              {/* Buttons */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Button className="group h-14 w-full rounded-xl bg-gray-950 text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-xl active:scale-[0.98]">
                  <TiShoppingCart className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                  Add to Cart
                </Button>

                <Button className="h-14 w-full rounded-xl border border-gray-900 bg-white text-sm font-semibold tracking-wide text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-950 hover:text-white hover:shadow-xl active:scale-[0.98]">
                  Buy Now
                </Button>
              </div>

              {/* Small info */}
              <div className="mt-6 grid grid-cols-3 divide-x divide-gray-100 rounded-xl border border-gray-100 bg-gray-50/70 py-4">
                <div className="px-2 text-center">
                  <p className="text-xs font-semibold text-gray-900">
                    Secure
                  </p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    Payment
                  </p>
                </div>

                <div className="px-2 text-center">
                  <p className="text-xs font-semibold text-gray-900">
                    Fast
                  </p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    Delivery
                  </p>
                </div>

                <div className="px-2 text-center">
                  <p className="text-xs font-semibold text-gray-900">
                    Easy
                  </p>
                  <p className="mt-1 text-[10px] text-gray-400">
                    Returns
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= TRUST BAR ================= */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-black/[0.05] bg-white px-5 py-4 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400 sm:gap-x-8 sm:text-xs">
          <span>Authentic Product</span>
          <span className="hidden sm:block">•</span>
          <span>Secure Checkout</span>
          <span className="hidden sm:block">•</span>
          <span>Premium Quality</span>
          <span className="hidden sm:block">•</span>
          <span>Fast Shipping</span>
        </div>

      </div>
    </main>
  );
};

export default CardDetails;