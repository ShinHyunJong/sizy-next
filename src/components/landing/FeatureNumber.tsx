import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import phoneNumberImg from '@/public/assets/images/landing/address.png';
import { fontSize } from '@/styles';

function FeatureNumber() {
  return (
    <Box bg="white" py={24}>
      <Container maxW="8xl" px={16}>
        <Flex
          flexDirection={['column', 'row-reverse', 'row-reverse']}
          gap={[8, 0, 0]}
        >
          <Flex flex={1} textAlign="center" alignItems="center">
            <Stack spacing={8}>
              <Stack>
                <Heading color="point.400" fontSize={fontSize.sectionHeader}>
                  간편 주소 등록
                </Heading>
                <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                  매번 다른 곳에서 주소 검색하셨나요?
                </Heading>
              </Stack>
              <Stack>
                <Heading color="gray.600" fontSize={fontSize.pointHeader}>
                  주문장 발급할 때, 즉시 주소검색!
                </Heading>
                <Heading
                  wordBreak="keep-all"
                  color="gray.500"
                  fontSize={fontSize.pointHeader}
                >
                  정확한 주소 등록을 통해, 배송지 오류를 줄이세요.
                </Heading>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              style={{ borderRadius: '20px' }}
              placeholder="empty"
              alt="phoneNumberImg"
              src={phoneNumberImg}
            ></Image>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default FeatureNumber;
