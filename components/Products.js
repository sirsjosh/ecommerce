import React from "react";
import { ProductStyle, Card } from "../styles/ProductStyle";
import Link from "next/link";

function Products({ product }) {
  const { title, price, image, slug } = product.attributes;

  return (
    <Card>
      <Link href={`product/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.small.url} />
        </div>
      </Link>
      <ProductStyle>
        <h2>{title}</h2>
        <h3>{price}元</h3>
      </ProductStyle>
    </Card>
  );
}

export default products;
