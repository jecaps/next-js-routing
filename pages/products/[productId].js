import { getProductById } from "../../services/data";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(ctx) {
  const { productId } = ctx.params;
  const product = await getProductById(productId);

  return {
    props: product,
  };
}

export default function Product({ name, description, price, category }) {
  console.log(name);

  return (
    <>
      <Head>
        <title>Product: {name}</title>
      </Head>
      <h1>Produkt {name}</h1>
      <p>Preis: {price}</p>
      <h2>Details</h2>
      <Link href={`/products`}>Alle Produkte</Link>
    </>
  );
}
