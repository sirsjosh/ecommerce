import styled from "styled-components";
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`;

export const CartSyle = styled(motion.div)`
  width: 50%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;

  @media (max-width: 633px) {
    width: 100%;
    padding: 2rem 2rem;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 1rem;
  margin: 2rem 0;
  img {
    width: 6rem;
  }
`;

export const CardInfo = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    flex-direction: space-between;
  }
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  h1 {
    font-size: 2rem;
    padding: 2rem;
  }

  svg {
    font-size: 10rem;
    color: var(--secondary);
  }
`;

export const TitlePrice = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const CardRight = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const Checkout = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    border: none;
    cursor: pointer;
  }
`;

export const Cards = styled(motion.div)``;

export const Close = styled(motion.div)`
  position: absolute;
  z-index: 200;
  top: 0;
  right: 0;
  padding: 0.5rem;

  svg {
    font-size: 2rem;
  }
`;
