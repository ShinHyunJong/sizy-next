import { extendTheme } from '@chakra-ui/react';

import colors from './colors';

const theme = extendTheme({
  fonts: {
    global: 'Pretendard',
    heading: 'Pretendard',
    body: 'Pretendard',
  },
  colors,
});

export default theme;
