import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import tabletNoteImg from '@/public/assets/images/landing/tabletNote.png';
import { fontSize } from '@/styles';

function FeatureNote() {
  return (
    <Box bg="gray.100" py={24}>
      <Container maxW="8xl" px={16}>
        <Flex flexDirection={['column', 'row', 'row']} gap={[8, 0, 0]}>
          <Flex flex={1} alignItems="center" textAlign="center">
            <Stack spacing={8}>
              <Stack>
                <Heading
                  as="h1"
                  color="point.400"
                  fontSize={fontSize.sectionHeader}
                >
                  고객들에게 실시간 알림
                </Heading>
                <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                  고객님에게 매번 연락하기 번거로우시죠?
                </Heading>
              </Stack>
              <Stack color="gray.500">
                <Heading fontSize={fontSize.pointHeader}>
                  주문장 발급과 동시에, 고객님에게 알림을 보내세요
                </Heading>
                <Heading wordBreak="keep-all" fontSize={fontSize.pointHeader}>
                  배송 현황, 주문 혹은 수선한 상품정보를 고객님들이 확인하실 수
                  있습니다
                </Heading>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              placeholder="empty"
              alt="phoneNumberImg"
              src={tabletNoteImg}
            ></Image>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default FeatureNote;
