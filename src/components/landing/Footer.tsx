import { Box, Container, Stack, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="gray.100" py={24}>
      <Container maxW="8xl" px={16}>
        <Stack>
          <Text>풀릿 | 대표 신현종 | 사업자등록번호 792-02-01932</Text>
          <Text>통신판매업 신고번호 | 2023-서울송파-6342</Text>
          <Text>전화 010-7712-9638</Text>
          <Text>서울특별시 송파구 석촌호수로 194, 태호빌딩 6F</Text>
          <Text>이메일 tonyshin@pulit.co.kr</Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
