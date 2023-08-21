import { Center, Flex, Heading, Text } from '@chakra-ui/react';

function Smart() {
  return (
    <Flex justifyContent="center" w="full">
      <Center>
        <Flex px={8} pt={48} pb={56} direction="column" alignItems="center">
          <Heading fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>
            <Text
              fontSize={{ base: '8xl', sm: '8xl', md: '8xl' }}
              color="point.400"
              as="b"
            >
              sizy
            </Text>
            로{' '}
            <Text
              fontSize={{ base: '8xl', sm: '8xl', md: '8xl' }}
              as="b"
              ml={4}
              color="point.400"
            >
              easy
            </Text>
            하게!
          </Heading>
        </Flex>
      </Center>
    </Flex>
  );
}

export default Smart;
