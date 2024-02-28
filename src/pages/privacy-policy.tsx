import { Container, Text } from '@chakra-ui/react';

import { policy } from '@/configs/term';

function PrivacyPolicyPage() {
  return (
    <Container py={20}>
      <Text fontWeight="bold" mb={4}>
        개인정보 처리방침
      </Text>
      <Text whiteSpace="pre-line" fontSize="sm" color="gray.600">
        {policy}
      </Text>
    </Container>
  );
}

export default PrivacyPolicyPage;
