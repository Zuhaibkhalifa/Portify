import styled from "@emotion/styled";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(90deg, #092142 0%, #fe4c5a 105.97%);
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;
    display: block;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #ff4d5a;
    }
  }
`;
export default StyledMenu;
