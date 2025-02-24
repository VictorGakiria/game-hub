import { Box, Flex } from "@chakra-ui/react"

export default function FlexLayout() {
  return (
<Flex bg='green.300' direction={{ base: 'column', md: 'column' }}>
    <Box flex='1' p='4' bg='red.300'>
        Box 1           
    </Box>
    <Box flex='1' p='4' bg='blue.300'>
        Box 2 
    </Box>
    <Box flex='1' p='4' bg='yellow.300'>
        Box 3
    </Box>
</Flex>

  )
}