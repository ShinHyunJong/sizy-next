import { Box, Button, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Fade } from 'react-awesome-reveal';

import { fontSize } from '@/styles';

function Greeting() {
  const router = useRouter();
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
                  의류 매장을 위한
                </Heading>
                <Heading as="h1" color="white" fontSize={['4xl', '5xl', '6xl']}>
                  온라인 주문장
                </Heading>
                <Flex mt={8}>
                  <Button
                    onClick={() => router.push('/contact')}
                    size="lg"
                    colorScheme="point"
                  >
                    무료 체험
                  </Button>
                </Flex>
              </Fade>
            </Stack>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}

export default Greeting;
