import React from "react";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

import { Navstyles, NavItems, Logo } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0";
import logo from "../public/logo.png";
import { useRouter } from "next/router";

const { AnimatePresence } = require("framer-motion");

function Nav() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();
  const route = useRouter();

  return (
    <Navstyles>
      <Logo onClick={() => route.push("/")}>
        <img src={logo.src} />
        <Link href={"/"}>Copacabana</Link>
      </Logo>
      <NavItems>
        <User />
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && <span>{totalQuantities}</span>}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </Navstyles>
  );
}

export default Nav;
