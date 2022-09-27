import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4D5A",
    },
  },
  shape: {
    borderRadius: "0px",
  },
});

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Box
          sx={{ height: { xs: "100%", xl: "110vh" }, color: "white", pt: 30 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            align="center"
            padding={10}
          >
            Contact Me
          </Typography>
          <Grid container spacing={2} align="center">
            <Grid item margin="auto" xs={10} xl={4} md={4} sm={4}>
              <TextField
                color="primary"
                fullWidth
                placeholder="Name"
                sx={{ input: { color: "white" }, border: "1px solid #FF4D54" }}
              ></TextField>
            </Grid>
            <Grid item margin="auto" xs={10} xl={4} md={4} sm={4}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Email"
                sx={{
                  input: { color: "white" },
                  border: "1px solid #FF4D5A",
                  borderRadius: "2px",
                  background: "transparent",
                }}
              ></TextField>
            </Grid>
            <Grid item margin="auto" xs={10} xl={4} md={4} sm={4}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Contact No"
                sx={{
                  input: { color: "white" },
                  border: "1px solid #FF4D5A",
                  background: "transparent",
                }}
              ></TextField>
            </Grid>
            <textarea
              rows="10"
              style={{
                resize: "vertical",
                width: "100%",

                marginLeft: 16,
                background: "transparent",
                color: "white",
                marginTop: "20px",
                border: "2px solid #FF4D5A",
                borderRadius: "0px",
                placeholder: "Enter Your message",
              }}
            ></textarea>

            <Button
              size="large"
              sx={{
                margin: "auto",
                width: "200px",
                mt: 5,
                color: "white",
                backgroundColor: "#FF4D5A",
                borderRadius: "0px",
                border: "1px solid #FF4D5A",
              }}
              variant="outlined"
            >
              Submit
            </Button>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              width="100%"
              padding={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>
                Call Me<Typography>+91 7022511144</Typography>
              </Typography>
              <Typography>
                Email<Typography>zuhaibkhalifa@gmail.com</Typography>
              </Typography>
              <Typography>
                Address<Typography>India,Karnataka</Typography>
              </Typography>
            </Stack>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
