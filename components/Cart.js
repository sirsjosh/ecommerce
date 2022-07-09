import React from "react";
import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartSyle,
  Card,
  EmptyStyle,
  TitlePrice,
  CardRight,
  Checkout,
  Cards,
  Close,
} from "../styles/CartStyles";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { Quantity } from "../styles/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
import getStripe from "../lib/getStripe";

//animation variants
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemCard = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

function Cart() {
  const { qty, cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();

  //payment
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const res = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await res.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <Close onClick={() => setShowCart(false)}>
        <AiOutlineClose />
      </Close>

      <CartSyle
        initial={{ x: window.innerWidth > 633 ? "50%" : "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1>You have more shopping to do 🙂</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        <Cards layout variants={container} initial="hidden" animate="visible">
          {cartItems?.map((item) => (
            <Card layout variants={itemCard} key={item.slug}>
              <img
                src={item.image.data.attributes.formats.thumbnail.url}
                alt={item.title}
              />
              <CardRight>
                <TitlePrice>
                  <h3>{item.title}</h3>
                  <h3>{item.price}元</h3>
                </TitlePrice>
                <Quantity>
                  <span>quantity</span>
                  <button>
                    <AiFillMinusCircle onClick={() => onRemove(item)} />
                  </button>
                  <p>{item.quantity}</p>
                  <button>
                    <AiFillPlusCircle onClick={() => onAdd(item, 1)} />
                  </button>
                </Quantity>
              </CardRight>
            </Card>
          ))}
        </Cards>
        {cartItems.length >= 1 && (
          <Checkout layout>
            <h3>Subtotal:{totalPrice}元</h3>
            <button onClick={handleCheckout}>Purchase</button>
          </Checkout>
        )}
      </CartSyle>
    </CartWrapper>
  );
}

export default Cart;
