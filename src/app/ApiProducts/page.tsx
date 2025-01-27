import { sanityClient } from '@/sanity/sanityClient';
import Link from 'next/link';

type Product = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageUrl: string;
  category: { _id: string; title: string };
  description: string;
  inventory: number;
  tags: string[];
};

type Category = {
  _id: string;
  title: string;
  imageUrl: string;
  products: number;
};

const productsQuery = `*[_type == "products"]{
  _id,
  title,
  price,
  priceWithoutDiscount,
  badge,
  "imageUrl": image.asset->url,
  category->{
    _id,
    title
  },
  description,
  inventory,
  tags
}`;

const categoriesQuery = `*[_type == "categories"]{
  _id,
  title,
  "imageUrl": image.asset->url,
  products
}`;

export default async function ApiProducts() {
  // Fetch products and categories
  const products: Product[] = await sanityClient.fetch(productsQuery);
  const categories: Category[] = await sanityClient.fetch(categoriesQuery);

  return (
    <div className="ml-28 mr-28 mt-10">
      {/* Products Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center text-[#06d6a0] mb-6">
          -----Sanity API Products Data-----
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product._id} href={`/products/${product._id}`}>
            <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-96"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#606c38] mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-500 mb-2">
                  {product.description.substring(0, 60)}...
                </p>
                <p className="text-lg font-bold text-blue-600">
                  Price: ${product.price}
                </p>
                <p className="text-md text-[#57cc99]">
                  Category: {product.category?.title || 'N/A'}
                </p>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h1 className="text-4xl font-bold text-center text-[#06d6a0] mb-6">
          -----Sanity API Categories Data-----
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
            key={category._id}
            className="bg-slate-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-96"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-amber-700 mb-2">
                {category.title}
              </h2>
              <p className="text-gray-500">
                Products in this category: {category.products}
              </p>
              <Link href={`/categories/${category._id}`} className="text-blue-600 hover:underline">
                View Category
              </Link>
            </div>
          </div>
          ))}
        </div>
      </section>
    </div>
  );
}



