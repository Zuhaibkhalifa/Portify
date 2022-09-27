import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
import "aos/dist/aos.css";
// import "../Assets/Styles/scroller.scss";

import back from "../Assets/Images/Backgrounds/back1.png";
import back1 from "../Assets/Images/Backgrounds/back2.png";
// import "../Assets/Styles/scroller";

import {
  Home,
  Portfolio,
  Contact,
  Footer,
  Navbar,
  About,
} from "../Imports/Imports";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

const override = {
  display: "block",
  margin: "auto",
};

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="scroller"
        sx={{
          background: " #080A14 ",
        }}
      >
        {loading ? (
          <div
            style={{ height: "100vh", display: "flex", alignItems: "center" }}
          >
            <ClipLoader
              cssOverride={override}
              color="#FF4D5A"
              loading={loading}
              size={100}
            />
          </div>
        ) : (
          <Box className="scroller">
            <Navbar />

            <section>
              <div data-aos="zoom-in">
                <Home />
              </div>
            </section>
            <section>
              <div data-aos="fade-up">
                <About />
              </div>
            </section>
            <section>
              <div data-aos="fade-up">
                <Portfolio />
              </div>
            </section>
            <section>
              <div data-aos="fade-up">
                <Contact /> <Footer />
              </div>
            </section>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
