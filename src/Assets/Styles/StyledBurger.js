import styled from "@emotion/styled";

const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 3;

  div {
    width: 3rem;
    height: 0.1rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 9px;

    :nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default StyledBurger;
