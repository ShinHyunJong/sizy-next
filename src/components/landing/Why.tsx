import { Center, Flex, Text } from '@chakra-ui/react';

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
        </Flex>
      </Center>
    </Flex>
  );
}

export default Why;
