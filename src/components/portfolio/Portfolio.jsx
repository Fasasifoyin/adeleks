/* eslint-disable react/prop-types */
import { Box, Flex, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { data } from "../../data/data";
import { PiGreaterThanLight } from "react-icons/pi";

const Portfolio = ({ dark }) => {
  return (
    <Box mt={"100px"} id="projects">
      <Box
        className={
          dark
            ? "text-white cc-container page-alignment"
            : "text-black cc-container page-alignment"
        }
      >
        <Text
          className="large-text"
          fontWeight={800}
          textAlign={"center"}
          mb={"20px"}
        >
          {data.portfolio.title}
        </Text>
        <Text mb={"70px"} textAlign={"center"} className="medium-text">
          {data.portfolio.short}
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={"40px"}>
          {data.portfolio.projects.map((each) => (
            <Box key={each.id} h={"270px"} position={"relative"}>
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                borderRadius={"10px"}
                alt="Project Image"
                src={each.image}
              />
              <Flex
                pos={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                borderRadius={"10px"}
                className={dark ? "bg-purple" : "bg-black"}
                opacity={0}
                _hover={{
                  opacity: 1,
                  transition: "0.2s ease-in all",
                }}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"20px"}
                gap={"40px"}
              >
                <Text
                  textAlign={"center"}
                  className="medium-text text-white"
                  fontWeight={600}
                >
                  {each.about}
                </Text>
                <a
                  href={each.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex
                    border={"2px solid #5be9b9"}
                    borderRadius={"20px"}
                    padding={"8px 30px"}
                    className="text-hover-white bg-hover-green"
                    gap={"10px"}
                    alignItems={"center"}
                  >
                    <Text fontWeight={500} className="text-white">Visit website</Text>
                    <Icon as={PiGreaterThanLight} color={"white"} boxSize={"20px"}/>
                  </Flex>
                </a>{" "}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Portfolio;
