import { Grid, Spacer, Box, Flex, Text, Button, Avatar, AvatarGroup, Tabs, TabList, Tab, TabPanels, TabPanel, useToast } from "@chakra-ui/react";
import { FaRegLaughWink, FaRegGrinTongueSquint, FaGrinStars, FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GiBirdTwitter } from "react-icons/gi";

export default function Grids() {
  const toast = useToast();

  const handleSubmit = () => {
    toast({
      title: "Logged Out Successfully!",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Flex height="100vh" flexDirection="column">
      <Flex
        as="header"
        width="100%"
        padding="20px"
        backgroundColor="gray.700"
        color="white"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontWeight="bold">
          K A I Z E N MOTORS
        </Text>
        <Flex alignItems="center">
          <AvatarGroup size="md" max={2} marginRight="20px">
            <Avatar name="Victor Gakiria" src="path_to_image.jpg" />
          </AvatarGroup>
          <Button colorScheme="red" onClick={handleSubmit}>
            Log Out
          </Button>
        </Flex>
      </Flex>

      <Flex flex="1">
        <Box
          width="200px"
          backgroundColor="gray.800"
          color="white"
          padding="20px"
        >
          <Box as="ul" listStyleType="none" paddingInline="0" gap="10px">
            <Box as="li" marginBottom="30px" display="flex" alignItems="center">
              <FaRegLaughWink style={{ marginRight: "10px" }} />
              BUDGET CARS
            </Box>
            <Box as="li" marginBottom="30px" display="flex" alignItems="center">
              <FaRegGrinTongueSquint style={{ marginRight: "10px" }} />
              CLASS CARS
            </Box>
            <Box as="li" marginBottom="30px" display="flex" alignItems="center">
              <FaGrinStars style={{ marginRight: "10px" }} /> SUV'S
            </Box>
          </Box>
        </Box>

        <Box flex="1" padding="20px">
          <Tabs>
            <TabList>
              <Tab _selected={{ color: "white", bg: "red" }} _hover={{ bg: "blue.300" }}>
                Contacts
              </Tab>
              <Tab _selected={{ color: "white", bg: "red" }} _hover={{ bg: "blue.300" }}>
                FAQs
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box as="ul" listStyleType="none" padding="0">
                  <Box as="li" display="flex" alignItems="center" marginBottom="10px">
                    <MdOutlineMail style={{ marginRight: "10px" }} />
                    <a
                      href="mailto:infokaizenmotors.co.ke"
                      style={{ textDecoration: "none", color: "inherit" }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "grey")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
                    >
                      infokaizenmotors.co.ke
                    </a>
                  </Box>
                  <Box as="li" display="flex" alignItems="center" marginBottom="10px">
                    <FaFacebookF style={{ marginRight: "10px" }} />
                    <a
                      href="https://www.facebook.com/KaizenMotors"
                      style={{ textDecoration: "none", color: "inherit" }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "grey")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
                    >
                      Kaizen Motors
                    </a>
                  </Box>
                  <Box as="li" display="flex" alignItems="center" marginBottom="10px">
                    <GiBirdTwitter style={{ marginRight: "10px" }} />
                    <a
                      href="https://www.twitter.com/KaizenMotors"
                      style={{ textDecoration: "none", color: "inherit" }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "grey")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
                    >
                      Kaizen Motors
                    </a>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>Content</TabPanel>
            </TabPanels>
          </Tabs>

          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={4}
            color="orange"
            bg={{ base: "white", md: "gray.100", lg: "blue.100" }}
            padding="20px"
          >
            {Array(9).fill("").map((_, index) => (
              <Box key={index} border="1px solid black" padding="20px">
                20
              </Box>
            ))}
          </Grid>

          <Button onClick={handleSubmit} colorScheme="blue" mt={4}>
            Submit
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
