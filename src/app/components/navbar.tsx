import { useState, useEffect } from 'react';
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";

export default function Navbar({ toggle }: { toggle: () => void }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Actions based on the search variable can be defined here.
    console.log("Search term:", search); // Example action
  }, [search]);

  return (
    <div className="bg-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Logo />
        <ul className="flex gap-x-4 text-white">
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
        <div className="ml-4 w-48"> {/* Adjusted the width of the search bar to make it smaller */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-1 rounded-md text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button>Log In</Button>
      </div>
    </div>
  );
}
