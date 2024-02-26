import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import search from '@/public/assets/images/landing/search.png';
import sms from '@/public/assets/images/landing/sms.png';
import { fontSize } from '@/styles';

import TypeSearch from './TypeSearch';

function FeatureSearch() {
  return (
    <Box bg="white" py={24}>
      <Container maxW="4xl">
        <Stack spacing={12}>
          <Stack spacing={1}>
            <Fade direction="up" triggerOnce>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                {`'`}누구였지?{`'`}
              </Heading>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                노트에서 찾지 말고
              </Heading>
            </Fade>

            <TypeSearch></TypeSearch>
          </Stack>
          <Flex
            bg="gray.100"
            justifyContent="center"
            borderRadius="2xl"
            p={[0, 4, 8]}
          >
            <Image
              placeholder="empty"
              alt="검색"
              src={search}
              unoptimized
            ></Image>
          </Flex>
          <Stack spacing={1}>
            <Heading fontSize={fontSize.sectionHeader}>
              고객님을 찾았다면
            </Heading>
            <Heading fontSize={fontSize.sectionHeader}>
              바로
              <Text ml={2} as="strong" color="point.400">
                문자 발송
              </Text>
              하세요.
            </Heading>
          </Stack>
          <Flex
            bg="gray.100"
            justifyContent="center"
            borderRadius="2xl"
            p={[0, 4, 8]}
          >
            <Image
              placeholder="empty"
              alt="문자발송"
              src={sms}
              unoptimized
            ></Image>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

export default FeatureSearch;
