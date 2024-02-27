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
              아래 카카오로 신청하기 버튼을 눌러 진행하시면 바로 서비스를
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
              두 달간 무료체험 진행 후, 서비스를 계속 이용하실지 결정하실 수
              있습니다.
            </Text>
            <Text>
              체험기간 동안 문자발송 제외, 카카오 알림톡 발송은 무료입니다.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Process;
