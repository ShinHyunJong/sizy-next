import {
  Box,
  Button,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

interface Props {
  children: React.ReactNode;
}

function PriceWrapper(props: Props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

function Price() {
  return (
    <Box mt="60px" py={12}>
      <VStack spacing={2}>
        <Heading as="h1" fontSize="4xl">
          사이지 가격 안내
        </Heading>
        {/* <Text fontSize="lg" color={'gray.600'}>
          45일 무료사용을 시작하세요!
        </Text> */}
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              45일 무료체험 후, 월 결제
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                ₩
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                32,900
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /월
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                45일 무료체험
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                알림톡 무제한
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Link href="/contact">
                <Button w="full" colorScheme="point" variant="outline">
                  체험시작
                </Button>
              </Link>
            </Box>
          </VStack>
        </PriceWrapper>

        {/* <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform="uppercase"
                bg="point.600"
                px={3}
                py={1}
                color="white"
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                인기
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                연 단위 결제
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  ₩
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  369,000
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /연
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  알림톡 건당 9.9원
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="point">
                  체험시작
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper> */}
      </Stack>
    </Box>
  );
}

export default Price;
