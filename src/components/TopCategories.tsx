// components/TopCategories.tsx
import React from "react";

const categories = [
  {
    title: "Wing Chair",
    products: "3,584 Products",
    image: "/TopCategories/TC1.png",
  },
  {
    title: "Wooden Chair",
    products: "157 Products",
    image: "/TopCategories/TC2.png",
  },
  {
    title: "Desk Chair",
    products: "154 Products",
    image: "/TopCategories/TC3.png",
  },
];

const TopCategories: React.FC = () => {
  return (
    <div className="ml-24 mr-24 mt-10">
    <section className="px-6 py-10">
      <h2 className="font-semibold text-[32px] pb-10">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <p className="text-sm">{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default TopCategories;
