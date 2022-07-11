import styled from "styled-components";

export const Navstyles = styled.nav`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  a {
    font-size: 1.2rem;

    @media (max-width: 633px) {
      font-size: 1rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    width: 5rem;
    height: 5rem;

    @media (max-width: 633px) {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  h3 {
    font-size: 1rem;
    padding: 0.25rem;

    @media (max-width: 633px) {
      font-size: 0.5rem;
    }
  }
  svg {
    font-size: 1.5rem;
  }
  span {
    background: #ff2626;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.6rem;
    position: absolute;
    right: -10%;
    top: -20%;
    pointer-events: none;
  }
`;
