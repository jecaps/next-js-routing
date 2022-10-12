import Head from "next/head";
import Link from "next/link";
import { getAllProducts } from "../../services/data";

export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: { products },
  };
}

export default function Products({ products }) {
  console.log(products);

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
