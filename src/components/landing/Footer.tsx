import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

function Footer() {
  return (
    <Box bg="gray.100" py={24}>
      <Container maxW="8xl" px={16}>
        <Stack>
          <Text>(주)풀릿 | 대표 신현종 | 사업자등록번호 295-86-02196</Text>
          <Text>이메일 cs@pulit.co.kr | 전화 070-7807-6505</Text>
          <Text>통신판매업번호 : 2022-서울송파-1003</Text>
          <Text>서울특별시 송파구 중대로 207, 2F a249호</Text>
          <Flex mt={4} gap={4}>
            <Link href="terms">
              <Text decoration="underline">이용 약관</Text>
            </Link>
            <Link href="privacy-policy">
              <Text decoration="underline">개인정보 처리방침</Text>
            </Link>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
