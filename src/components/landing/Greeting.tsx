import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import CountUp from 'react-countup';

import { fontSize } from '@/styles';

import KakaoTrialButton from '../global/KakaoTrialButton';

const statList = [
  { value: 10424, label: '등록된 단골 손님' },
  { value: 20850, label: '작성된 주문/수선/노트' },
];

function Greeting() {
  // const { data } = useQuery('stats', getLanldingStats);

  return (
    <Box className="mainBg" h="100vh" position="relative">
      <Box
        bg="black"
        opacity={0.4}
        position="absolute"
        width="full"
        h="full"
      ></Box>
      <Flex position="absolute" w="full" h="full">
        <Container maxW="4xl" h="full">
          <Flex h="full" alignItems="center">
            <Stack as={Box}>
              <Fade
                triggerOnce
                direction="up"
                delay={300}
                cascade
                damping={1e-1}
              >
                <Heading
                  as="h1"
                  fontWeight={900}
                  fontSize={fontSize.titleHeader}
                  lineHeight="110%"
                  color="white"
                >
                  오직 나만을 위한
                </Heading>
                <Heading
                  as="h1"
                  color="white"
                  fontSize={['4xl', '5xl', '6xl']}
                  mb={8}
                >
                  고객 약속 관리
                </Heading>
                <SimpleGrid spacing={4} columns={3}>
                  {statList.map((x) => {
                    return (
                      <Flex direction="column" key={x.value}>
                        <Text fontSize={['sm', 'md', 'lg']} color="gray.300">
                          {x.label}
                        </Text>
                        <Text
                          m={0}
                          fontWeight="bold"
                          fontSize={['3xl', '4xl', '5xl']}
                          color="gray.200"
                        >
                          <CountUp preserveValue end={x.value}></CountUp>
                        </Text>
                      </Flex>
                    );
                  })}
                </SimpleGrid>

                <KakaoTrialButton></KakaoTrialButton>
                {/* <Flex mt={8}>
                  <Button
                    onClick={() => router.push('/contact')}
                    size="lg"
                    colorScheme="point"
                  >
                    무료 체험
                  </Button>
                </Flex> */}
              </Fade>
            </Stack>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}

export default Greeting;
