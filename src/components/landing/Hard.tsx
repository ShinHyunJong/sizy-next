import { Box, Flex, Heading } from '@chakra-ui/react';

import KakaoTrialButton from '../global/KakaoTrialButton';

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
            px={4}
            justifyContent="center"
          >
            <Heading
              wordBreak="keep-all"
              color="white"
              fontSize={{ base: '3xl', sm: '3xl', md: '6xl' }}
            >
              주문, 더 이상 번거롭지 않아요.
            </Heading>
            <Heading
              wordBreak="keep-all"
              color="white"
              mb={4}
              fontSize={{ base: '3xl', sm: '3xl', md: '6xl' }}
            >
              바로 무료 체험하세요!
            </Heading>
            <KakaoTrialButton></KakaoTrialButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Hard;
