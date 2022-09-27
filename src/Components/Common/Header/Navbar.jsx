import React from "react";
import { Box } from "@mui/material";
import image from "../../../Assets/Images/Icons/2.png";

import StyledBurger from "../../../Assets/Styles/StyledBurger";
import StyledMenu from "../../../Assets/Styles/StyledMenu";
import "../../../Assets/Styles/scroll.scss";
import Social from "../../Home/Social";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(null)}>
      <a href="#Home">HOME</a>
      <a href="#About">ABOUT ME</a>
      <a href="#About">WHAT I DO</a>
      <a href="#Portfolio">Portfolio</a>
      <a href="#Contact">CONTACT ME</a>
    </StyledMenu>
  );
};

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
    </StyledBurger>
  );
};

const Navbar = () => {
  const [scroll, setScroll] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  const background = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", background);

  return (
    <>
      <Box className={scroll ? "scroll active" : "scroll"}>
        <Box>
          <a href="#home">
            <img src={image} alt="logo" />
          </a>
        </Box>
        <Box
          ref={node}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <Social />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
