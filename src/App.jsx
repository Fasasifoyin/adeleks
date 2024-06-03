import { useState } from "react";
import { Box } from "@chakra-ui/react";
import "./styles/index.scss";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  const [mobileLinks, setMobileLinks] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <Box className={dark ? "app" : "app2"}>
      <Navbar
        dark={dark}
        setDark={setDark}
        mobileLinks={mobileLinks}
        setMobileLinks={setMobileLinks}
      />
      <Box pt={{ base: mobileLinks ? "130px" : "100px", md: "100px" }}>
        <Hero dark={dark} />
        <About dark={dark} />
        <Portfolio dark={dark} />
        <Footer dark={dark} />
      </Box>
    </Box>
  );
}

export default App;
