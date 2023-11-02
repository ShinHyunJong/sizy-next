import type { ComponentStyleConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import colors from './colors';

const inputStyle: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    clear: {
      field: {
        border: 'none',
        outline: 'none',
        padding: 0,
        bg: 'transparent',
        _focus: {
          outline: '0px',
          boxShadow: 'none',
          border: 'none',
        },
        _hover: {
          boxShadow: 'none',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
    focusBorderColor: 'point.400',
  },
};

const textareaStyle: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    outline: {
      field: {
        borderRadius: 'full',
      },
    },
    clear: {
      field: {
        border: 'none',
        outline: 'none',
        padding: 0,
        bg: 'transparent',
        _focus: {
          outline: '0px',
          boxShadow: 'none',
          border: 'none',
        },
        _hover: {
          boxShadow: 'none',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
    focusBorderColor: 'point.400',
  },
};

const theme = extendTheme({
  fonts: {
    global: 'Pretendard',
    heading: 'Pretendard',
    body: 'Pretendard',
  },
  colors,
  components: {
    Input: inputStyle,
    Textarea: textareaStyle,
  },
});

export default theme;
