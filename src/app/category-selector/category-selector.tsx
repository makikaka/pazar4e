import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faCouch, faTshirt, faBook, faFutbol } from '@fortawesome/free-solid-svg-icons';

// Mock categories data with FontAwesome icons
const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: faTv,
  },
  {
    id: 2,
    name: "Furniture",
    icon: faCouch,
  },
  {
    id: 3,
    name: "Clothing",
    icon: faTshirt,
  },
  {
    id: 4,
    name: "Books",
    icon: faBook,
  },
  {
    id: 5,
    name: "Sports Equipment",
    icon: faFutbol,
  },
];

// CategorySelector component
export default function CategorySelector() {
  return (
    <div className="container mx-auto mt-8 p-4 shadow-lg rounded-lg bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Discover Your Next Treasure</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map(category => (
          <Link key={category.id} href={`/categories/${category.name.toLowerCase()}`}>
            <div className="flex flex-col items-center bg-white text-black rounded-lg p-4 cursor-pointer transform transition-transform hover:scale-105 shadow-md">
              <FontAwesomeIcon icon={category.icon} className="text-4xl mb-4" />
              <span className="text-xl font-semibold">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
