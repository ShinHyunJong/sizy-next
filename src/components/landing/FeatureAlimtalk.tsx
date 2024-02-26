import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

// import tabletNoteImg from '@/public/assets/images/landing/tabletNote.png';
import kakaoPreviewOrder from '@/public/assets/images/landing/kakaoPreviewOrder.png';
import kakaoPreviewOrder2 from '@/public/assets/images/landing/kakaoPreviewOrder2.png';
import { fontSize } from '@/styles';

function FeatureAlimtalk() {
  return (
    <Box bg="gray.100" py={24}>
      <Container maxW="5xl">
        <Flex flexDirection={['column', 'row', 'row']}>
          <Flex flex={1} alignItems="center">
            <Stack spacing={8}>
              <Fade
                triggerOnce
                direction="up"
                delay={300}
                cascade
                damping={1e-1}
              >
                <Stack spacing={0}>
                  <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                    이제 더 이상 개인번호로
                  </Heading>
                  <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                    연락하지 마세요.
                  </Heading>
                </Stack>
              </Fade>
              <Image
                unoptimized
                placeholder="empty"
                alt="카카오 프리뷰"
                src={kakaoPreviewOrder}
                priority
              ></Image>
            </Stack>
          </Flex>
          <Flex flex={1} justifyContent="center">
            <Stack spacing={8}>
              <Image
                unoptimized
                placeholder="empty"
                alt="카카오 프리뷰2"
                src={kakaoPreviewOrder2}
                priority
              ></Image>
              <Stack spacing={0}>
                <Text fontSize={fontSize.sectionHeader}>
                  상황별로 준비된 카카오 알림톡으로
                </Text>
                <Text fontSize={fontSize.sectionHeader}>
                  개인번호 노출없이, 마음껏 보내세요.
                </Text>
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default FeatureAlimtalk;
