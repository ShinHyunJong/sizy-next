import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import phoneNumberImg from '@/public/assets/images/landing/phoneNumber.png';
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
                  간편 고객정보 등록
                </Heading>
                <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                  고객님이 개인정보입력을 꺼려하시나요?
                </Heading>
              </Stack>
              <Stack>
                <Heading color="gray.600" fontSize={fontSize.pointHeader}>
                  포인트 적립처럼 간단하게!
                </Heading>
                <Heading color="gray.500" fontSize={fontSize.pointHeader}>
                  휴대폰 번호하나로만 고객이 직접 등록하고, 매장에서 관리하세요
                </Heading>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
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
