import { Box, Center, Flex, Heading, Stack } from '@chakra-ui/react';

import { fontSize } from '@/styles';

function Greeting() {
  return (
    <Box className="mainBg" h={['300px', '500px', '600px']} position="relative">
      <Box
        bg="black"
        opacity={0.55}
        position="absolute"
        width="full"
        h="full"
      ></Box>
      <Flex justifyContent="center" position="absolute" w="full" h="full">
        <Center textAlign="center">
          <Stack as={Box} py={{ base: '25%', md: '28%', lg: '30%' }}>
            <Heading as="h1" color="point.200" fontSize={['6xl', '7xl', '8xl']}>
              sizy
            </Heading>
            <Heading
              as="h1"
              fontWeight={900}
              fontSize={fontSize.titleHeader}
              lineHeight="110%"
              color="white"
            >
              매니저와 고객을 연결합니다.
            </Heading>
          </Stack>
        </Center>
      </Flex>
    </Box>
  );
}

export default Greeting;
