import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";

import Product from "../components/Products";
import { Gallery } from "../styles/Gallery";

export default function Home() {
  //FETCH PRODUCTS FROM STRAPI
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>Copacabana</title>
        <meta name="description" content="ecommerce website Copacabana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Gallery>
          {products?.map((product) => (
            <Product product={product} key={product.attributes.slug} />
          ))}
        </Gallery>
      </main>
    </div>
  );
}
