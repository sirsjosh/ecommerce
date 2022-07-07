import styled from "styled-components";

export const ProductStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 16rem;

  h2 {
    padding: 0.5rem 0;
  }
`;

export const Card = styled.div`
  background: white;

  img {
    width: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`;
