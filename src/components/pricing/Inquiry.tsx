import { Box, Button, Container, Heading } from '@chakra-ui/react';
import Link from 'next/link';

function Inquiry() {
  return (
    <Box bg="point.500" py={16}>
      <Container maxW="6xl" textAlign="center">
        <Heading mb={8} color="white">
          지금 도입하세요!
        </Heading>
        <Link href="/contact">
          <Button size="lg">도입 문의</Button>
        </Link>
      </Container>
    </Box>
  );
}

export default Inquiry;
