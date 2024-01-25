import { Center, Flex, Stack, Text } from '@chakra-ui/react';

function Why() {
  return (
    <Flex justifyContent="center" w="full">
      <Center>
        <Flex px={8} pt={48} pb={56} direction="column" alignItems="center">
          <Text
            fontSize={{ base: '8xl', sm: '8xl', md: '8xl' }}
            color="point.400"
            as="b"
          >
            Why?
          </Text>
          <Stack
            color="gray.500"
            textAlign="center"
            fontSize="xl"
            fontWeight="bold"
          >
            <Stack>
              <Text>매장을 모르는 사람이 만들지 않았습니다.</Text>
              <Text>
                오프라인 매장에서{' '}
                <Text color="black" as="b">
                  9년동안 일해온 현직매니저
                </Text>
                가
              </Text>
              <Text>자신의 불편함을 해결하기 위해 만들었지만</Text>
              <br></br>
            </Stack>
            <Stack>
              <Text>모든 매니저들의 편의성을 제공하기 위해</Text>
              <Text>대중화 시킨 프로그램입니다.</Text>
              <br></br>
            </Stack>
            <Stack>
              <Text color="black" as="b">
                주문 및 수선 노트, 고객노트, 배송알림
              </Text>
              <Text color="black" as="b">
                단골 고객을 유지하세요!
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Center>
    </Flex>
  );
}

export default Why;
