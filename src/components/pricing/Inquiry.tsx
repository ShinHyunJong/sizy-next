import { Box, Center, Container, Heading } from '@chakra-ui/react';

import KakaoTrialButton from '../global/KakaoTrialButton';

function Inquiry() {
  return (
    <Box bg="point.400" py={16}>
      <Container maxW="6xl" textAlign="center">
        <Heading mb={8} color="white">
          지금 바로 체험해보세요!
        </Heading>
        <Center>
          <KakaoTrialButton></KakaoTrialButton>
        </Center>
      </Container>
    </Box>
  );
}

export default Inquiry;
