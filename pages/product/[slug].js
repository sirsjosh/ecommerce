import React, { useEffect } from "react";
import { useQuery } from "urql";
import { useRouter } from "next/router";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";
import toast from "react-hot-toast";

import { GET_PRODUCT_QUERY } from "../../lib/query";
import {
  ProductDetail,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";

function ProductDetails() {
  //create a toast
  const notify = () => {
    toast.success(`${title} added to your cart`, { duration: 2000 });
  };

  //useState
  const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext();

  //reset quantity
  useEffect(() => {
    setQty(1);
  }, []);

  //fetch the slug
  const { query } = useRouter();

  //fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  const { title, description, image, price } = data.products.data[0].attributes;
  return (
    <ProductDetail>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <h3>{price}</h3>
        <Quantity>
          <span>quantity</span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            onAdd(data.products.data[0].attributes, qty);
            notify();
            setQty(1);
          }}
        >
          add to cart
        </Buy>
      </ProductInfo>
    </ProductDetail>
  );
}

export default ProductDetails;
