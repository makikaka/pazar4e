import React from 'react';
import Link from 'next/link';

// Define the structure of a product
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

// Type for the props expected by the FeaturedListings component
type FeaturedListingsProps = {
  products: Product[];
};

// FeaturedListings component defined as a function
export default function FeaturedListings({ products }: FeaturedListingsProps) {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Featured Listings</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <span className="text-green-500 font-bold">${product.price}</span>
            <Link href={`/products/${product.id}`}>
              <span className="mt-2 text-blue-500 hover:text-blue-700 cursor-pointer">View Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
