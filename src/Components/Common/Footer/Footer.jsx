import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Stack } from "@mui/system";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const Footer = () => {
  return (
    <Box>
      <Divider color="grey" />
      <Container
        maxWidth="lg"
        sx={{ display: "flex", p: 3, justifyContent: "space-between" }}
      >
        <Stack direction="row">
          <CopyrightIcon />
          <Typography marginLeft={2} fontFamily="saira" align="center">
            Copyright 2022 - ZuhaibKhalifa
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <FacebookRoundedIcon />
          <InstagramIcon />
          <GitHubIcon />
          <LinkedInIcon />
          <TwitterIcon />
          <a href="#Home">
            <ArrowCircleUpIcon
              sx={{
                position: "fixed",
                right: "100px",
                bottom: "20px",
                fontSize: "40px",
              }}
            />
          </a>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
