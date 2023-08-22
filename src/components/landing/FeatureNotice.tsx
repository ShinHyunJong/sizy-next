import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import customerNotiImg from '@/public/assets/images/landing/customerNoti.png';
import { fontSize } from '@/styles';

function FeatureNotice() {
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
                  상황별 맞춤 알림톡
                </Heading>
                <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                  고객님께 연락하기 번거롭지 않으셨나요?
                </Heading>
              </Stack>
              <Stack color="gray.500">
                <Heading fontSize={fontSize.pointHeader}>
                  수선, 주문, 리오더, 택배 알림!
                </Heading>
                <Heading wordBreak="keep-all" fontSize={fontSize.pointHeader}>
                  상황별로 미리 등록된 카카오 알림톡으로 편하게 연락하세요
                </Heading>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              placeholder="empty"
              alt="customerNotiImg"
              src={customerNotiImg}
            ></Image>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default FeatureNotice;
