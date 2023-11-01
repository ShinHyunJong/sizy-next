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
            <Heading
              as="h1"
              fontWeight={900}
              fontSize={fontSize.titleHeader}
              lineHeight="110%"
              color="white"
            >
              오프라인 매장을 위한
            </Heading>
            <Heading as="h1" color="point.200" fontSize={['4xl', '5xl', '6xl']}>
              온라인 주문장, sizy
            </Heading>
          </Stack>
        </Center>
      </Flex>
    </Box>
  );
}

export default Greeting;
