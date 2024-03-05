"use client";

import React from "react";
import { affiliateProducts } from "../../../constants/index";
import Link from "next/link";

const ProductCard = () => {
  console.log(affiliateProducts);
  return (
    <div className="grid gap-2 md:gap-6 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {affiliateProducts.map((product) => (
        <div
          key={product.id}
          className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 bg-white"
        >
          <div className="flex justify-center h-48 lg:h-[280px] relative">
            <img
              className="rounded-lg bg-black/40 w-full h-full object-cover"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
          <div className="text-center font-semibold space-y-2">
            <h6 className="text-sm md:text-base lg:text-lg">{product.name}</h6>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-6">
            <Link
              href={product.affiliateLink}
              className="px-4 py-2 rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold"
            >
              Buy now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
