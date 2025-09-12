import React from "react";
import { products } from "@/app/lib/products";
import ProductCard from "@/app/components/ProductCard";

// Server Component — no 'use client' here
export default function ProductPage({ params }) {
  const { id } = params; // id comes from URL, e.g., /product/B07PCMWTSG
  const product = products.find((p) => p.asin === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain mb-4"
      />
      <p className="mb-2">{product.description}</p>
      <p className="font-semibold mb-4">Price: ${product.price}</p>
      <a
        href={`${product.link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Buy on Amazon
      </a>
    </div>
  );
}
