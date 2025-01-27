import { GetServerSideProps } from 'next';
import { sanityClient } from '@/sanity/sanityClient';

type Category = {
  _id: string;
  title: string;
  imageUrl: string;
  products: { _id: string; title: string }[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  // Sanity query to fetch the category and its products
  const query = `*[_type == "categories" && _id == $id][0]{
    _id,
    title,
    "imageUrl": image.asset->url,
    "products": *[_type == "products" && references(^._id)]{
      _id,
      title
    }
  }`;

  const category = await sanityClient.fetch(query, { id });

  if (!category) {
    return { notFound: true };
  }

  return {
    props: { category },
  };
};

const CategoryDetail = ({ category }: { category: Category }) => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
      <img src={category.imageUrl} alt={category.title} className="mb-4 w-full h-96 object-cover" />
      <h2 className="text-2xl font-semibold mb-4">Products in this Category:</h2>
      <ul className="list-disc list-inside">
        {category.products.map((product) => (
          <li key={product._id} className="text-lg text-blue-600">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDetail;
