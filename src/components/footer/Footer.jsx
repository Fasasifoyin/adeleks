/* eslint-disable react/prop-types */
import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import useElementHeight from "../../hooks/useElementHeight";
import { data } from "../../data/data";

const Footer = ({ dark }) => {
  const { elementRef, elementHeight } = useElementHeight();

  return (
    <Box mt={"170px"} className="bg-purple" pb={"70px"}>
      <Box
        className="cc-container page-alignment"
        h={`calc(${elementHeight}px + 40px)`}
      >
        <Box position={"relative"}>
          <Box
            ref={elementRef}
            position={"absolute"}
            top={"-70px"}
            left={0}
            p={"50px"}
            className={dark ? "bg-white" : "bg-black"}
            w={"100%"}
            borderRadius={"20px"}
          >
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: "40px", md: "20px" }}
              className={dark ? "text-black" : "text-white"}
            >
              <Flex alignItems={"center"} w={"100%"} justifyContent={"center"}>
                <Text className="large-text" fontWeight={"bold"}>
                  {data.footer.banner.first}
                </Text>
              </Flex>
              <Box textAlign={"center"}>
                <Text>{data.footer.banner.second}</Text>
              </Box>
              <Flex alignItems={"center"} w={"100%"} justifyContent={"center"}>
                <a
                  href={data.socials[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    border={"2px solid #5be9b9"}
                    borderRadius={"20px"}
                    padding={"8px 30px"}
                    className="text-hover-white bg-hover-green"
                  >
                    <Text> {data.footer.banner.third}</Text>
                  </Box>
                </a>
              </Flex>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Flex justifyContent={"center"} className="cc-container page-alignment">
        <Box width={"100%"} maxW={"400px"} textAlign={"center"}>
          <Text
            fontWeight={"bold"}
            className={"text-white medium-text"}
            mb={"40px"}
          >
            Adeleke
          </Text>
          <Text mb={"50px"} className="medium-text text-light-8-purple">
            Living, learning, & leveling up one day at a time.
          </Text>
          <Flex gap={"20px"} justifyContent={"center"}>
            {data.socials.map((each) => (
              <a
                key={each.id}
                href={each.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  width={"45px"}
                  h={"45px"}
                  borderRadius={"50%"}
                  className="border-light-8-purple text-white bg-hover-white text-hover-purple"
                  display={"grid"}
                  placeItems={"center"}
                >
                  <Icon as={each.icon} boxSize={"20px"} />
                </Box>
              </a>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
