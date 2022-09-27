import { Box, Container, Grid, Typography, Modal, Stack } from "@mui/material";
import React from "react";
import bg1 from "../../../Assets/Images/Backgrounds/bg1.png";
import bg2 from "../../../Assets/Images/Backgrounds/bg2.png";
import bg3 from "../../../Assets/Images/Backgrounds/bg3.png";
import bg4 from "../../../Assets/Images/Backgrounds/bg4.png";
import bg5 from "../../../Assets/Images/Backgrounds/bg5.png";
import bg6 from "../../../Assets/Images/Backgrounds/bg6.png";
import re from "../../../Assets/Images/Backgrounds/re.png";
import axios from "../../../Assets/Images/Backgrounds/axios.png";
import sass from "../../../Assets/Images/Backgrounds/sass.png";
import mui from "../../../Assets/Images/Backgrounds/mui.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  height: "100vh",
  background:
    "linear-gradient(359.69deg, #04101D 100%, rgba(7, 33, 65, 0) 337.55%)",
  pt: 2,
  px: 4,
  pb: 3,
  display: "flex",
  alignItems: "center",
};

const mydata = [
  {
    id: 1,
    Name: "Project 1",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    link: "https://thunderous-longma-ff3890.netlify.app",
    img: bg1,
  },
  {
    id: 2,
    Name: "Project 2",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    link: "wwww.google.com",
    img: bg2,
  },
  {
    id: 3,
    Name: "Project 3",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    link: "wwww.google.com",
    img: bg3,
  },
  {
    id: 4,
    Name: "Project 4",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    link: "wwww.google.com",
    img: bg4,
  },
  {
    id: 1,
    Name: "Project 1",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    link: "wwww.google.com",
    img: bg1,
  },
  {
    id: 5,
    Name: "Project 5",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    link: "wwww.google.com",
    img: bg5,
  },
  {
    id: 6,
    Name: "Project 6",
    Description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    link: "wwww.google.com",
    img: bg6,
  },
];
const Portfolio = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  const handleOpen = (id) => {
    const myID = mydata.filter((val) => val.id === id);
    setSelected(myID);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        height: { xs: "100%", xl: "100vh" },
        width: { xs: "100%", xl: "100vw" },
      }}
    >
      <Typography variant="h2" fontWeight="bold" align="center">
        Portfolio
      </Typography>
      <Container maxWidth="lg">
        <Grid
          container
          paddingTop={5}
          spacing={{ xs: 1, xl: 1 }}
          sx={{ display: "flex", alignContent: { xs: "center", sm: "center" } }}
        >
          <Grid item xs={8} sm={6} md={6} xl={4} lg={4} align="center">
            <Box
              width={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "380px",
              }}
              height={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "500px",
              }}
              sx={{
                cursor: "pointer",
                filter: " invert(80%)",
                transition: "all 0.5s",

                "&:hover": {
                  filter: "none",
                  transform: "Scale(0.9)",
                },
              }}
            >
              <img
                onClick={() => handleOpen(1)}
                src={bg1}
                alt="first-Project"
                width="100%"
                height="100%"
              />

              {open && (
                <>
                  {console.log(selected, "id")}
                  <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                  >
                    {/* {console.log(index)} */}
                    <Box sx={{ ...style }}>
                      <Container maxWidth="lg">
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <img
                              src={selected[0].img}
                              alt="hero2"
                              width="100%"
                              height="100%"
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Box>
                              <Typography variant="h2">
                                {selected[0].Name}
                              </Typography>
                              <Typography variant="p">
                                {selected[0].Description}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="h3">Technologies</Typography>
                              <Stack direction="row" spacing={5}>
                                <img alt="hello" src={re} />
                                <img alt="hello" src={mui} />
                                <img alt="hello" src={sass} />
                                <img alt="hello" src={axios} />
                              </Stack>
                              <Typography variant="h6">
                                <OpenInNewIcon />
                                Preview:
                                <a href={selected[0].link} target="_blank">
                                  Live Demo
                                </a>
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                      <CancelIcon
                        sx={{
                          position: "fixed",
                          top: 50,
                          right: "200px",
                          cursor: "pointer",
                        }}
                        onClick={handleClose}
                        fontSize="large"
                      />
                    </Box>
                  </Modal>
                </>
              )}
            </Box>
          </Grid>
          <Grid
            // margin={{ xs: "auto", md: "auto", lg: "auto" }}
            item
            xs={8}
            md={4}
            sm={6}
            xl={4}
            lg={4}
            align="center"
          >
            <Box
              width={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "380px",
              }}
              height={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "300px",
              }}
              sx={{
                cursor: "pointer",
                filter: " invert(80%)",
                transition: "all 0.5s",

                "&:hover": {
                  filter: "none",
                  transform: "Scale(0.9)",
                },
              }}
            >
              <img
                onClick={() => handleOpen(2)}
                src={bg2}
                alt="first-Project"
                width="100%"
                height="100%"
              />
            </Box>
          </Grid>
          <Grid
            // margin={{ xs: "auto", md: "auto", lg: "0" }}
            item
            xs={8}
            sm={6}
            md={4}
            xl={4}
            lg={4}
            align="center"
          >
            <Box
              width={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "380px",
              }}
              height={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "500px",
              }}
              sx={{
                cursor: "pointer",
                filter: " invert(80%)",
                transition: "all 0.5s",

                "&:hover": {
                  filter: "none",
                  transform: "Scale(0.9)",
                },
              }}
            >
              <img
                onClick={() => handleOpen(3)}
                src={bg3}
                alt="first-Project"
                width="100%"
                height="100%"
              />
            </Box>
          </Grid>
          <Grid
            // margin={{ xs: "auto", md: "auto", lg: "0" }}
            item
            xs={8}
            sm={6}
            md={6}
            xl={4}
            lg={4}
            align="center"
          >
            <Box
              width={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "380px",
              }}
              height={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "300px",
              }}
              sx={{
                cursor: "pointer",
                filter: " invert(80%)",
                transition: "all 0.5s",

                "&:hover": {
                  filter: "none",
                  transform: "Scale(0.9)",
                },
              }}
            >
              <img
                src={bg4}
                onClick={() => handleOpen(4)}
                alt="first-Project"
                width="100%"
                height="100%"
              />
            </Box>
          </Grid>
          <Grid
            // margin={{ xs: "auto", md: "auto", lg: "0" }}
            item
            xs={8}
            sm={6}
            md={4}
            xl={4}
            lg={4}
            align="center"
          >
            <Box
              width={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "380px",
              }}
              mt={{ xl: "-200px" }}
              height={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "500px",
              }}
              sx={{
                cursor: "pointer",
                filter: " invert(80%)",
                transition: "all 0.5s",

                "&:hover": {
                  filter: "none",
                  transform: "Scale(0.9)",
                },
              }}
            >
              <img
                onClick={() => handleOpen(5)}
                src={bg5}
                alt="first-Project"
                width="100%"
                height="100%"
              />
            </Box>
          </Grid>
          <Grid
            // margin={{ xs: "auto", md: "auto", lg: "auto" }}
            item
            xs={8}
            md={4}
            sm={6}
            xl={4}
            lg={4}
            align="center"
          >
            <Box
              width={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "380px",
              }}
              height={{
                xs: "350px",
                sm: "300px",
                md: "400px",
                lg: "380px",
                xl: "300px",
              }}
              sx={{
                cursor: "pointer",
                filter: " invert(80%)",
                transition: "all 0.5s",

                "&:hover": {
                  filter: "none",
                  transform: "Scale(0.9)",
                },
              }}
            >
              <img
                onClick={() => handleOpen(6)}
                src={bg6}
                alt="first-Project"
                width="100%"
                height="100%"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
