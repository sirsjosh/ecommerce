import styled from "styled-components";

export const ProductStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  width: 16rem;

  h2 {
    padding: 0.5rem 0;

    @media (max-width: 633px) {
      font-size: 0.75rem;
      padding: 0;
      text-align: center;
    }
  }

  @media (max-width: 633px) {
    width: 9rem;
    padding: 1rem;
  }
`;

export const Card = styled.div`
  background: white;
  flex: 0.2;
  margin: 1rem 0;

  img {
    width: 100%;
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 633px) {
    flex: 0.1;
  }
`;
