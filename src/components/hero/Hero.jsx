/* eslint-disable react/prop-types */
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { data } from "../../data/data";

const Hero = ({ dark }) => {
  return (
    <Box
      mt={{ base: "50px", md: "100px" }}
      id="/"
    >
      <Box className="cc-container page-alignment">
        <Flex
          width={"100%"}
          direction={"column"}
          alignItems={"center"}
          textAlign={"center"}
          className={dark ? "text-white" : "text-black"}
        >
          <Text as={"h1"} textTransform={"uppercase"}>
            {data.hero.job}
          </Text>
          <Text className="medium-text" mt={"10px"} fontWeight={4500}>
            {data.hero.about}
          </Text>
          <Box mt={"70px"} width={"250px"} h={"250px"}>
            <Image
              w={"100%"}
              h={"100%"}
              src={data.hero.image}
              objectFit={"cover"}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
