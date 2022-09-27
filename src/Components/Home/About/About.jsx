import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import CircularProgress from "./CicularProgress.js";
import Aos from "aos";
import "aos/dist/aos.css";
import dev from "../../../Assets/Images/Backgrounds/dev.png";
import des from "../../../Assets/Images/Backgrounds/des.png";
import { useInView } from "react-intersection-observer";

const About = () => {
  // const { ref: myRef, inView: aniMate } = useInView();

  // console.log(myRef);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1 }} id="About">
      <Box
        sx={{
          height: { xs: "100%", xl: "100vh" },
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          align="center"
          noWrap="false"
          padding={10}
        >
          About Me
        </Typography>
        <Typography variant="subtitle1" align="center">
          I am a creative designer and developer, who aims to work with small
          businesses and marginalized communities to bring their passions to
          life. I offer both design and development services of web applications
          or websites!
        </Typography>

        <Stack
          // ref={myRef}
          direction={{ xs: "column", xl: "row", md: "row", lg: "row" }}
          spacing="20px"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: "80px",
          }}
        >
          <Box>
            <CircularProgress
              size={200}
              strokeWidth={10}
              color={"#FF4D5A"}
              percentage={"80"}
            />
            <Typography variant="h6" align="center" mt={2} color="#FF4D5A">
              HTML / CSS
            </Typography>
          </Box>

          <Box>
            <CircularProgress
              size={200}
              strokeWidth={10}
              color={"#FF4D5A"}
              percentage={"60"}
            />
            <Typography variant="h6" align="center" mt={2} color="#FF4D5A">
              JAVASCRIPT
            </Typography>
          </Box>
          <Box>
            <CircularProgress
              size={200}
              strokeWidth={10}
              color={"#FF4D5A"}
              percentage={"60"}
            />
            <Typography variant="h6" align="center" mt={2} color="#FF4D5A">
              React JS
            </Typography>
          </Box>
          <Box>
            <CircularProgress
              size={200}
              strokeWidth={10}
              color={"#FF4D5A"}
              percentage={"50"}
            />
            <Typography variant="h6" align="center" mt={2} color="#FF4D5A">
              figma
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          // height: "70vh",
          marginBottom: "100px",
          height: { xs: "100%", xl: "100vh" },
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          align="center"
          noWrap="false"
          padding={10}
        >
          What I Do
        </Typography>
        <div data-aos="fade-up">
          <Grid
            align="center"
            spacing={10}
            container
            direction={{ xs: "column", md: "row", xl: "row" }}
          >
            <Grid item xs={6}>
              <Box
                padding={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={dev} />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="#FF4D5A"
                  align="start"
                  marginLeft="20px"
                >
                  Development
                </Typography>
              </Box>
              <Typography align="start" padding="10px">
                Front-end web development, also known as client-side development
                is the practice of producing HTML, CSS and JavaScript for a
                website or Web Application so that a user can see and interact
                with them directly. The challenge associated with front end
                development is that the tools and techniques used to create the
                front end of a website change constantly and so the developer
                needs to constantly be aware of how the field is developing.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box
                padding={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={des} />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="#FF4D5A"
                  align="start"
                  marginLeft="20px"
                >
                  Design
                </Typography>
              </Box>
              <Typography align="start" padding="10px">
                The objective of designing a site is to ensure that when the
                users open up the site they see the information in a format that
                is easy to read and relevant. This is further complicated by the
                fact that users now use a large variety of devices with varying
                screen sizes and resolutions thus forcing the designer to take
                into consideration these aspects when designing the site. They
                need to ensure that their site comes up correctly in different
                browsers (cross-browser), different operating systems
                (cross-platform) and different devices (cross-device), which
                requires careful planning on the side of the developer.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
};

export default About;
