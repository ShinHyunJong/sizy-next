import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

function Process() {
  return (
    <Box bg="gray.100" py={12}>
      <Container maxW="6xl" bg="gray.100">
        <Heading mb={8}>도입 절차</Heading>
        <Flex gap={4}>
          <Flex
            rounded="lg"
            p={4}
            bg="white"
            flex={1}
            direction="column"
            gap={2}
          >
            <Text fontSize="lg" fontWeight="bold">
              1.서비스 가입
            </Text>
            <Text>
              아래 도입 문의 버튼을 눌러 진행하시면 12시간 뒤에 바로 서비스를
              이용하실 수 있습니다.
            </Text>
          </Flex>
          <Flex
            rounded="lg"
            p={4}
            bg="white"
            flex={1}
            direction="column"
            gap={2}
          >
            <Text fontSize="lg" fontWeight="bold">
              2.이용 시작
            </Text>
            <Text>
              초기 비밀번호로 로그인 하신 후 바로 서비스 이용을 시작하실 수
              있습니다.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Process;
