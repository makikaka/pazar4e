import Image from "next/image";
import FeaturedListings from "./featured-products/featured-products"
import { products } from "../../public/mock-data/products"
import CategorySelector from "./category-selector/category-selector"
import HowItWorks from "./how-it-works/how-it-works"

export default function Home() {
  return (
    <main>
      <div>
      <CategorySelector />
      <FeaturedListings products={products} />
      <HowItWorks></HowItWorks>
      {/* Additional components or content */}
    </div>
    </main>
  );
}
