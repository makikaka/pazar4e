// Define the structure of a product
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }
  
  // Sample products data
  export const products: Product[] = [
    {
      id: 1,
      name: 'Vintage Camera',
      price: 75,
      image: 'https://via.placeholder.com/150',
      description: 'A fully functional vintage camera from the 1950s.'
    },
    {
      id: 2,
      name: 'Leather Backpack',
      price: 45,
      image: 'https://via.placeholder.com/150',
      description: 'A durable leather backpack suitable for hiking or everyday use.'
    },
    {
      id: 3,
      name: 'Antique Vase',
      price: 120,
      image: 'https://via.placeholder.com/150',
      description: 'A beautiful antique vase from the Ming Dynasty era.'
    },
  ];
  