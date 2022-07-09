import styled from "styled-components";

export const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 30%;

    @media (max-width: 633px) {
      width: 100%;
    }
  }

  @media (max-width: 633px) {
    flex-direction: column;
  }
`;

export const ProductInfo = styled.div`
  width: 40%;

  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
    @media (max-width: 633px) {
      margin: 1rem 0;
    }
  }

  @media (max-width: 633px) {
    width: 100%;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }

  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: #494949;
    cursor: pointer;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;
