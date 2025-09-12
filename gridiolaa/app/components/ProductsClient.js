'use client';
import React from "react";
import ProductCard from "./ProductCard";
import { products as mockProducts } from "../lib/products";

export default function ProductsClient() {
  const products = mockProducts;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold">
          Find the Perfect Amazon Gift Card — Your Guide to Gifting Smart 🎁
        </h1>
        <p className="text-gray-600 mt-2">
          Choosing the right Amazon gift card can be confusing.  
          That’s why I’ve hand-picked the best options for birthdays, holidays, and surprises — 
          so you can gift with confidence.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((p) => (
          <ProductCard key={p.asin} product={p} />
        ))}
      </section>

      <div className="bg-gray-50 p-4 rounded-xl mt-8 text-center">
        <h2 className="font-bold text-lg">Why trust my picks?</h2>
        <p className="text-sm text-gray-600 mt-2">
          I review and organize the most useful Amazon gift cards, so you don’t waste time scrolling endlessly.  
          My goal is to make gifting stress-free and meaningful.
        </p>
      </div>
    </div>
  );
}
