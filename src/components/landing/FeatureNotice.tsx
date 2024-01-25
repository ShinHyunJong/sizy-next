import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import tabletNoteImg from '@/public/assets/images/landing/tabletNote.png';
// import customerNotiImg from '@/public/assets/images/landing/customerNoti.png';
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
                  자동으로 관리되는 내 고객
                </Heading>
                <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                  고객노트 따로 작성하시죠?
                </Heading>
              </Stack>
              <Stack color="gray.500">
                <Heading as="h1" fontSize={fontSize.pointHeader}>
                  고객님들의 정보를 바로바로 검색해서 판매에 힘이 되어드립니다.
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
              src={tabletNoteImg}
            ></Image>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default FeatureNotice;
