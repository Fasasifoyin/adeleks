/* eslint-disable react/prop-types */
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import useElementHeight from "../../hooks/useElementHeight";
import { data } from "../../data/data";

const About = ({ dark }) => {
  const { elementRef, elementHeight } = useElementHeight();

  return (
    <Box mt={"100px"} id="about">
      <Box
        className="bg-purple"
      >
        <Box className="cc-container page-alignment">
          <Flex
            w={"100%"}
            pt={{ base: "80px", md: "130px" }}
            alignItems={"center"}
            direction={"column"}
          >
            <Box
              width={"100%"}
              maxW={"800px"}
              color={"white"}
              textAlign={"center"}
            >
              <Text className="large-text" fontWeight={800}>
                {data.about.intro}
              </Text>
              <Text mt={"20px"}>{data.about.about}</Text>
            </Box>
            <Box
              mt="50px"
              h={{ base: "150px", md: "200px" }}
              w={"100%"}
              position={"relative"}
            >
              <Box
                ref={elementRef}
                position={"absolute"}
                width={"100%"}
                top={"20px"}
                boxShadow={
                  "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                }
                borderRadius={"20px"}
                className={dark ? "bg-black" : "bg-white"}
              >
                <Flex direction={{ base: "column", md: "row" }}>
                  {data.about.skills.map((each) => (
                    <Flex
                      key={each.id}
                      padding={"40px"}
                      direction={"column"}
                      alignItems={"center"}
                      textAlign={"center"}
                      width={{ base: "100%", md: "50%" }}
                      borderRight={
                        each.id === 1 ? { md: "1px solid rgb(0,0,0,0.1)" } : ""
                      }
                      borderBottom={
                        each.id === 1
                          ? { base: "1px solid rgb(0,0,0,0.1)", md: "none" }
                          : ""
                      }
                      className={dark ? "text-white" : "text-black"}
                    >
                      <Box
                        display={"grid"}
                        placeItems={"center"}
                        width={"70px"}
                        height={"70px"}
                        borderRadius={"50%"}
                        className="bg-green"
                        mb={"20px"}
                      >
                        <Icon as={each.icon} boxSize={"40px"} />
                      </Box>
                      <Text className="medium-text" fontWeight={800}>
                        {each.title}
                      </Text>
                      <Text mt={"20px"}>{each.short}</Text>
                      <Text
                        className="text-purple"
                        mt={"40px"}
                        fontWeight={500}
                      >
                        Languages I speak:
                      </Text>
                      <Text mt={"5px"}>{each.languages}</Text>
                      <Text
                        className="text-purple"
                        mt={"40px"}
                        fontWeight={500}
                      >
                        Dev tools:
                      </Text>
                      {each.devTools.map((each, index) => (
                        <Box key={index} mt={"5px"}>
                          <Text>{each}</Text>
                        </Box>
                      ))}
                    </Flex>
                  ))}
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box
        h={{
          base: `calc(${elementHeight}px - 130px)`,
          md: `calc(${elementHeight}px - 180px)`,
        }}
        className={dark ? "bg-black" : "bg-white"}
      />
    </Box>
  );
};

export default About;
