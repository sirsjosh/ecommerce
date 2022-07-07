import styled from "styled-components";
const { motion } = require("framer-motion");

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem;

  h2 {
    margin: 1rem 0;
  }

  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
  }
`;

export const Wrapper = styled(motion.div)`
  margin: 5rem 15rem;
`;

export const Address = styled.div`
  font-size: 1rem;
  width: 100%;
  margin: 0.5rem;
`;

export const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  margin: 0.5rem;

  div {
    padding-bottom: 1rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
`;
