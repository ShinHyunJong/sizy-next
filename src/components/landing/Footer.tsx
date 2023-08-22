import { Box, Container, Flex } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="white" py={24}>
      <Container maxW="8xl" px={16}>
        <Flex
          flexDirection={['column', 'row-reverse', 'row-reverse']}
          gap={[8, 0, 0]}
        ></Flex>
      </Container>
    </Box>
  );
}

export default Footer;
