import React from 'react';

// Mock data for steps
const steps = [
  {
    id: 1,
    title: "Create an Account",
    description: "Sign up and join our community to start buying and selling second-hand goods.",
    icon: "👤", // Placeholder for an icon, you can replace this with an actual icon component
  },
  {
    id: 2,
    title: "List Your Items",
    description: "Easily list your items for sale with photos and descriptions.",
    icon: "📸", // Placeholder for an icon, you can replace this with an actual icon component
  },
  {
    id: 3,
    title: "Find Great Deals",
    description: "Browse through listings to find great deals on second-hand items.",
    icon: "🔍", // Placeholder for an icon, you can replace this with an actual icon component
  },
  {
    id: 4,
    title: "Contact Sellers",
    description: "Reach out to sellers directly to arrange purchases and ask questions.",
    icon: "💬", // Placeholder for an icon, you can replace this with an actual icon component
  },
];

export default function HowItWorks() {
  return (
    <div className="container mx-auto mt-8 p-4 shadow-lg rounded-lg bg-gray-100 mb-8">
      <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(step => (
          <div key={step.id} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
