import '../styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <DefaultSeo
      title={'sizy::오프라인 매장 고객관리툴'}
      description={`sizy는 매니저와 고객을 연결합니다`}
      canonical={`https://sizy.co.kr`}
      openGraph={{
        type: 'website',
        url: `https://sizy.co.kr`,
        title: `아토`,
        description: 'sizy는 매니저와 고객을 연결합니다',
        siteName: '아토',
      }}
    ></DefaultSeo>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
