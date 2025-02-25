import { Box, Flex, Spacer } from "@chakra-ui/react";

export default function FlexLayout() {
  const headStyle = {
    color: "white",
    fontSize: "40px",
    margin: "10px",
    padding: "10px",
    textAlign: "center" as "center",
    textShadow: "2px 2px 4px #000000",
  };

  const boxStyle = {
    bg: "rgba(255, 255, 255, 0.1)",
    color: "white",
    p: "4",
    align: "center",
    borderRadius: "12px",
    boxShadow: "lg",
    display: "flex",
    gap: "30px",
  };

  return (
    <>
      <Flex bg="green.500" color="black" mx={5} align="center" p="4">
        {/* Fixed heading - added inline style */}
        <h1 style={headStyle}>KAIZEN</h1>
        <Spacer />
        {/* Simplified Box styling */}
        <Box {...boxStyle}>
          <Box>Cars</Box>
          <Box>Trucks</Box>
          <Box>Socials</Box>
        </Box>
      </Flex>
    </>
  );
}
