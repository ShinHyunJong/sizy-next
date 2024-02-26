import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import pickup from '@/public/assets/images/landing/pickup.png';
import { fontSize } from '@/styles';

function FeaturePickup() {
  return (
    <Box bg="gray.700" py={24}>
      <Container maxW="4xl">
        <Stack spacing={12}>
          <Fade direction="up" triggerOnce>
            <Stack color="white" spacing={1}>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                픽업은
              </Heading>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                확실하게 체크해서
              </Heading>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                사고를 방지하세요.
              </Heading>
            </Stack>
          </Fade>
          <Flex
            bg="gray.700"
            justifyContent="center"
            borderRadius="2xl"
            p={[0, 4, 8]}
          >
            <Image
              placeholder="empty"
              alt="픽업전달"
              src={pickup}
              unoptimized
            ></Image>
          </Flex>
          <Stack color="gray.200" spacing={1}>
            <Heading fontSize={fontSize.sectionHeader}>
              전달직원 체크와 동시에
            </Heading>
            <Heading fontSize={fontSize.sectionHeader}>
              고객에게
              <Text mx={2} as="strong" color="point.200">
                픽업 확인
              </Text>
              알림톡 전송!
            </Heading>
            <Heading fontSize={fontSize.sectionHeader}>
              "못 받았는데요?"는 이제 없습니다.
            </Heading>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default FeaturePickup;
