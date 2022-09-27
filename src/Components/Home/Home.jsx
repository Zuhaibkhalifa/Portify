import { Box, Button, Container, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Typewriter from "typewriter-effect";
import React from "react";
import svg from "../../Assets/Images/Backgrounds/hero2.svg";

const Home = () => {
  return (
    <Container maxWidth="fixed" id="Home">
      <Box
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "flex-start",
          height: { xs: "30vh", xl: "100vh" },
          width: "100%",
          p: { md: "200px" },
          flexDirection: "column",
          backgroundImage: `url(${svg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "50%",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontFamily="saira"
            color="#FF4D5A"
            fontSize={{ xs: "50px" }}
          >
            I am Zuhaib Khalifa
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            fontFamily="saira"
            fontWeight="bold"
            color="white"
            fontSize={{ xs: "25px" }}
          >
            <Typewriter
              options={{ autoStart: true, loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Front-end Web Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("UI/UX Designer")
                  .pauseFor(2000)
                  .start();
              }}
            />
            <Button
              sx={{ color: "white", borderColor: "white" }}
              variant="outlined"
              endIcon={<DownloadIcon />}
              size="large"
            >
              <a href="../../Assets/ZUHAIB CV.pdf" download>
                <span style={{ color: "#FF4D5A" }}>R</span>esume
              </a>
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
