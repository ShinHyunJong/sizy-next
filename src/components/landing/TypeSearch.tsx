'use client';

import { Box } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';

import { fontSize } from '@/styles';

function TypeSearch() {
  return (
    <Box fontSize={fontSize.titleHeader} fontWeight="bold">
      <TypeAnimation
        speed={10}
        repeat={Infinity}
        omitDeletionAnimation
        sequence={[1000, '빠르게 연락할 수 있어요.', () => {}]}
        wrapper="h1"
        cursor={true}
      />
    </Box>
  );
}

export default TypeSearch;
