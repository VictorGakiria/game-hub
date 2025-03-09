import { Grid, Spacer, Box } from "@chakra-ui/react"
import { color } from "framer-motion"
import { FaCarSide } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaRegFaceGrinStars } from "react-icons/fa6";
import { FaGrinStars } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { FaStarAndCrescent } from "react-icons/fa";
import { FaStarOfDavid } from "react-icons/fa";
import { FaRegFaceLaughWink } from "react-icons/fa6";
import { SiBugatti } from "react-icons/si";

import { FaRegFaceGrinTongueSquint } from "react-icons/fa6";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GiBirdTwitter } from "react-icons/gi";
import { useToast, Button } from "@chakra-ui/react";










export default function Grids() {
  const toast = useToast();

  const handleSubmit = () => {
    toast({
      title: "Submitted",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const breakpoints = {};

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "black",
          height: "100vh",
          width: "200px",
          float: "left",
        }}
      >
        <Box
          as="ul"
          listStyleType="none"
          paddingInline={"20px"}
          paddingBlock={"20px"}
          style={{ gap: "10px" }}
        >
          <li
            style={{
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaRegFaceLaughWink style={{ marginRight: "10px" }} />
            BUDGET CARS
          </li>
          <li
            style={{
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaRegFaceGrinTongueSquint style={{ marginRight: "10px" }} />
            CLASS CARS
          </li>
          <li
            style={{
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaGrinStars style={{ marginRight: "10px" }} /> SUV'S
          </li>
        </Box>
      </div>

      <h6
        style={{
          padding: "30px",
          textAlign: "center",
          width: "100vw",
          backgroundColor: "silver",
        }}
      >
        K A IZ E N MOTORS
      </h6>
      <Tabs>
        <TabList>
          <Tab
            _selected={{ color: "white", bg: "red", borderRadius: "10px solid white" }}
            _hover={{ bg: "blue.300" }}
          >
            Contacts
          </Tab>
          <Tab _selected={{ color: "white", bg: "red" }} _hover={{ bg: "blue.300" }}>
            FAQs
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ul
              style={{
                textDecoration: "none",
                listStyleType: "none",
                padding: 0,
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <MdOutlineMail style={{ marginRight: "10px" }} />
                <a
                  href="mailto:infokaizenmotors.co.ke"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "grey")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
                >
                  infokaizenmotors.co.ke
                </a>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <FaFacebookF style={{ marginRight: "10px" }} />
                <a
                  href="https://www.facebook.com/KaizenMotors"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "grey")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
                >
                  Kaizen Motors
                </a>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <GiBirdTwitter style={{ marginRight: "10px" }} />
                <a
                  href="https://www.twitter.com/KaizenMotors"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "grey")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "inherit")}
                >
                  Kaizen Motors
                </a>
              </li>
            </ul>
          </TabPanel>
          <TabPanel>Content</TabPanel>
        </TabPanels>
      </Tabs>

      <Grid
        templateColumns="repeat(3, 5fr)"
        gap="2"
        color={"orange"}
        bg={{ base: "white", md: "gray.100", lg: "blue.100" }}
        height="100vh"
      >
        <div style={{ border: "1px solid black" }}>20</div>
        <div style={{ border: "1px solid black" }}>20</div>
        <div style={{ border: "1px solid black" }}>20</div>
        <div style={{ border: "1px solid black" }}>20</div>
        <div style={{ border: "1px solid black" }}>20</div>
        <div style={{ border: "1px solid black" }}>20</div>
        <div style={{ border: "1px solid black" }}>20</div>
        <div style={{ border: "1px solid black" }}>20</div>
        <div style={{ border: "1px solid black" }}>20</div>
      </Grid>

      <Button onClick={handleSubmit} colorScheme="blue" mt={4}>
        Submit
      </Button>
    </>
  );
}