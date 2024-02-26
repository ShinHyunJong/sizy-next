import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import delivery from '@/public/assets/images/landing/delivery.png';
import { fontSize } from '@/styles';

function FeatureDelivery() {
  return (
    <Box bg="gray.800" py={24}>
      <Container maxW="4xl">
        <Stack spacing={12}>
          <Fade direction="up" triggerOnce>
            <Stack color="white" spacing={1}>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                택배는
              </Heading>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                운송장 번호만 입력하면
              </Heading>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                배송현황이 자동으로.
              </Heading>
            </Stack>
          </Fade>
          <Flex
            bg="gray.800"
            justifyContent="center"
            borderRadius="2xl"
            p={[0, 4, 8]}
          >
            <Image
              placeholder="empty"
              alt="픽업전달"
              src={delivery}
              unoptimized
            ></Image>
          </Flex>
          <Stack color="gray.200" spacing={1}>
            <Heading fontSize={fontSize.sectionHeader}>
              고객이
              <Text mx={2} as="strong" color="point.200">
                스스로
              </Text>
            </Heading>
            <Heading fontSize={fontSize.sectionHeader}>
              배송 현황을 확인할 수 있어요.
            </Heading>
            <Heading fontSize={fontSize.sectionHeader}>
              매장에 더 이상 문의 전화는 그만.
            </Heading>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default FeatureDelivery;
