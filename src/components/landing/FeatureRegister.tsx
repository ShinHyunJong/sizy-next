import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import oneView from '@/public/assets/images/landing/oneView.png';
import simpleOrder from '@/public/assets/images/landing/simpleOrder.png';
import { fontSize } from '@/styles';

function FeatureNumber() {
  return (
    <Box bg="white" py={24}>
      <Container maxW="4xl">
        <Stack spacing={12}>
          <Fade direction="up" triggerOnce>
            <Stack>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                누구나, 손쉽게
              </Heading>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                작성할 수 있어요.
              </Heading>
            </Stack>
          </Fade>
          <video playsInline autoPlay muted loop style={{ borderRadius: 20 }}>
            <source
              src="https://sizy-assets.s3.ap-northeast-2.amazonaws.com/landing/create.mp4"
              type="video/mp4"
            ></source>
          </video>
          <Flex
            bg="gray.100"
            justifyContent="center"
            borderRadius="2xl"
            p={[0, 4, 8]}
          >
            <Image
              placeholder="empty"
              alt="간편한 주문장 작성"
              src={simpleOrder}
              unoptimized
            ></Image>
          </Flex>
          <Stack spacing={4}>
            <Heading fontSize={fontSize.sectionHeader}>
              한 눈에{' '}
              <Text as="strong" color="point.400">
                주문/수선 현황
              </Text>
              을 체크하세요.
            </Heading>
            <Flex
              bg="point.100"
              justifyContent="center"
              borderRadius="2xl"
              p={[0, 4, 8]}
            >
              <Image
                placeholder="empty"
                alt="간편한 주문장 작성"
                src={oneView}
                unoptimized
              ></Image>
            </Flex>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default FeatureNumber;
