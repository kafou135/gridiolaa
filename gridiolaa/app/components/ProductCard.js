'use client'; // 👈 must be at the very top

import React from "react";
import { useRouter } from "next/navigation"; // App Router

export default function ProductCard({ product }) {
  const router = useRouter(); // ✅ now works

  const handleClick = () => {
    // example: navigate somewhere when clicking the card
    router.push(`/product/${product.asin}`);
  };

  return (
    <div
      onClick={handleClick}
      className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-3"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-lm text-gray-600">{product.price}$</p>
      <p className="text-sm text-gray-500">{product.description}</p>
    </div>
  );
}
