'use client';

import { Box } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';

import { fontSize } from '@/styles';

function TypeSearch() {
  return (
    <Box fontSize={fontSize.titleHeader} fontWeight="bold">
      <TypeAnimation
        speed={10}
        omitDeletionAnimation
        sequence={[1000, '생각나는대로 검색하세요.', () => {}]}
        wrapper="h1"
        cursor={true}
      />
    </Box>
  );
}

export default TypeSearch;