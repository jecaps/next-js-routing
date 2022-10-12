import Head from "next/head";
import Link from "next/link";
import { getProductById } from "../../services/data";

export async function getServerSideProps(ctx) {
  const { productId } = ctx.params;
  const product = await getProductById(productId);

  return {
    props: product,
  };
}

export default function Product({ name, description, price, category }) {
  return (
    <>
      <Head>
        <title>Product: {name}</title>
      </Head>
      <h1>Produkt {name}</h1>
      <p>Preis: {price}</p>
      <h2>Details</h2>
      {/* <Table>
        <tbody>
          <tr>
            <TdBold>Beschreibung:</TdBold>
            <td>{description}</td>
          </tr>
          <tr>
            <TdBold>Kategorie:</TdBold>
            <td>{category}</td>
          </tr>
        </tbody>
      </Table> */}
      <Link href={`/products`}>Alle Produkte</Link>
    </>
  );
}
