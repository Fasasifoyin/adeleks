/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { MdClose, MdLightMode, MdDarkMode } from "react-icons/md";
import Links from "./Links";
import { data } from "../../data/data";

const Navbar = ({ mobileLinks, setMobileLinks, dark, setDark }) => {
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prev) => {
        return {
          y: window.scrollY,
          lastY: prev.y,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (Number(window.scrollY) > 120 && scrollData.y > scrollData.lastY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [scrollData]);

  return (
    <Box
      pos={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      h={{ base: mobileLinks ? "130px" : "100px", md: "100px" }}
      zIndex={100}
      transition={"all 0.4s ease"}
      transform={showNav ? "" : "translateY(-100%)"}
      bg={dark ? "rgb(20,28,58, .7)" : "rgb(255,255,255,0.7)"}
    >
      <Flex
        alignItems={"center"}
        h={"100px"}
        className="cc-container page-alignment"
      >
        <Flex justify={"space-between"} alignItems={"center"} w={"100%"}>
          <Text fontWeight={"bold"} className={"text-purple medium-text"}>
            Adeleke
          </Text>
          <Flex alignItems={"center"} gap={{ base: "20px", md: "30px" }}>
            <Flex
              gap={"30px"}
              hideBelow={"md"}
              className={dark ? "text-white" : "text-black"}
            >
              <Links />
            </Flex>
            <a
              href={data.socials[1].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                border={"2px solid #6e07f3"}
                borderRadius={"20px"}
                padding={"8px 20px"}
                className="text-hover-white bg-hover-purple text-purple"
              >
                <Text fontWeight={"500"} as={"p"}>
                  Say Hello
                </Text>
              </Box>
            </a>
            <Icon
              as={dark ? MdLightMode : MdDarkMode}
              boxSize={"30px"}
              color={dark ? "yellow" : "black"}
              onClick={() => setDark(!dark)}
              className="cursor"
            />
            <Icon
              as={mobileLinks ? MdClose : FiMenu}
              boxSize={"20px"}
              hideFrom={"md"}
              className={
                dark
                  ? "text-white cursor text-hover-purple"
                  : "text-black cursor text-hover-purple"
              }
              onClick={() => setMobileLinks(!mobileLinks)}
            />
          </Flex>
        </Flex>
      </Flex>
      {mobileLinks && (
        <Flex
          hideFrom={"md"}
          justifyContent={"center"}
          h={"30px"}
          alignItems={"center"}
        >
          <Flex gap={"30px"} className={dark ? "text-white" : "text-black"}>
            <Links />
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Navbar;
