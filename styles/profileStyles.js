import styled from "styled-components";

export const Order = styled.div`
  background: white;
  margin: 2rem 0;
  padding: 3rem;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background: var(--primary);
  width: 100%;
  height: 7vh;
  border-radius: 0.2rem;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;
