import { Container, Text } from '@chakra-ui/react';

import { term } from '@/configs/term';

function TermPage() {
  return (
    <Container py={20}>
      <Text fontWeight="bold" mb={4}>
        사이지 이용 약관
      </Text>
      <Text whiteSpace="pre-line" fontSize="sm" color="gray.600">
        {term}
      </Text>
    </Container>
  );
}

export default TermPage;
