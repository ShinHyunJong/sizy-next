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
        sequence={[1000, '단골 고객으로 만드세요.', () => {}]}
        wrapper="h1"
        cursor={true}
      />
    </Box>
  );
}

export default TypeSearch;
