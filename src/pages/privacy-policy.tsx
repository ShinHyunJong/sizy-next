import { Box, Container, Text } from '@chakra-ui/react';
import Markdown from 'react-markdown';

import { policy } from '@/configs/term';

function PrivacyPolicyPage() {
  return (
    <Container py={20}>
      <Text fontWeight="bold" mb={4}>
        개인정보 처리방침
      </Text>
      <Box whiteSpace="pre-line">
        <Markdown>{policy}</Markdown>
      </Box>
    </Container>
  );
}

export default PrivacyPolicyPage;
