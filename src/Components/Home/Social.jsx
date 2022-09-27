import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Social = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "30px",
        top: "350px",
        display: { xs: "none", lg: "flex" },
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <a href="https://www.facebook.com/m.zuhaib.mohammed" target="blank">
        <FacebookIcon />
      </a>
      <a href="https://twitter.com/Zuhaibkhalifa" target="blank">
        <TwitterIcon />
      </a>
      <a href="https://github.com/Zuhaibkhalifa" target="blank">
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/zuhaib-khalifa-a76926169/"
        target="blank"
      >
        <LinkedInIcon />
      </a>
      <a href="https://www.instagram.com/zuhaibk10/" target="blank">
        <InstagramIcon />
      </a>
      <Typography
        variant="subtitle2"
        sx={{
          color: "#FF4D5A",
          marginTop: "50px",
          transform: "rotateZ(-90deg)",
          letterSpacing: 5,
        }}
      >
        Follow Me
      </Typography>
    </Box>
  );
};

export default Social;
