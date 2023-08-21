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
                <Heading color="point.400" fontSize={fontSize.sectionHeader}>
                  나만의 VIP 노트
                </Heading>
                <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                  매번 고객정보 잊어버리셨죠?
                </Heading>
              </Stack>
              <Stack color="gray.500">
                <Heading fontSize={fontSize.pointHeader}>
                  이젠 온라인으로!
                </Heading>
                <Heading wordBreak="keep-all" fontSize={fontSize.pointHeader}>
                  고객 응대할 때 필요한 특이사항을 미리 등록하고, 소통하세요
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
