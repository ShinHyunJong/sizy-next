import { Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

function Header() {
  return (
    <Flex
      w="full"
      bg="white"
      height="60px"
      as="header"
      position="fixed"
      zIndex={10}
      top={0}
      justifyContent="space-between"
      alignItems="center"
      boxShadow="md"
      px={[4, 8]}
    >
      <Flex as="ul" gap={4} alignItems="center">
        <Link href="/">
          <Text mr={2} as="h2" fontWeight="bold" fontSize="2xl">
            sizy
          </Text>
        </Link>

        <Link href="/">
          <Flex fontSize={['sm', 'md']} as="li">
            서비스 안내
          </Flex>
        </Link>
        <Link href="/pricing">
          <Flex
            fontWeight="bold"
            color="point.400"
            fontSize={['sm', 'md']}
            as="li"
          >
            도입 및 비용
          </Flex>
        </Link>
      </Flex>
      <Flex gap={4} alignItems="center">
        <Link href="https://store.sizy.co.kr" target="_blank">
          <Flex fontSize={['sm', 'md']}>매장 로그인</Flex>
        </Link>
        <Link href="/contact">
          <Button display={['none', 'block']} colorScheme="point">
            도입 문의
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
