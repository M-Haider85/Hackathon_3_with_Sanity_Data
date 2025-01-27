import { GetServerSideProps } from 'next';
import { sanityClient } from '@/sanity/sanityClient';

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!; // Extract the product ID from the URL

  const query = `*[_type == "products" && _id == $id][0]{
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

  const product = await sanityClient.fetch(query, { id });

  if (!product) {
    return { notFound: true }; // Return 404 if product is not found
  }

  return {
    props: { product }, // Pass the product data to the page component
  };
};

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} className="mb-4 w-full h-96 object-cover" />
      <p className="text-gray-700">{product.description}</p>
      <p className="text-2xl font-bold mt-4">Price: ${product.price}</p>
      <p className="text-lg text-green-600">Category: {product.category?.title || 'N/A'}</p>
    </div>
  );
};

export default ProductDetail;
