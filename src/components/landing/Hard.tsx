import { Box, Flex, Heading } from '@chakra-ui/react';

function Hard() {
  return (
    <Box p="5%">
      <Box className="hardBg" h="600px" w="full" position="relative">
        <Box
          bg="black"
          opacity={0.4}
          position="absolute"
          width="full"
          h="full"
        ></Box>
        <Flex justifyContent="center" position="absolute" w="full" h="full">
          <Flex
            direction="column"
            alignItems="center"
            textAlign="center"
            h="full"
            justifyContent="center"
          >
            <Heading
              wordBreak="keep-all"
              color="white"
              fontSize={{ base: '3xl', sm: '3xl', md: '6xl' }}
            >
              흩어진 고객 정보로 힘들어 하지 말고
            </Heading>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Hard;
