import '../styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <DefaultSeo
      title={'사이지::오프라인 매장 고객관리툴'}
      description={`sizy는 매니저와 고객을 연결합니다`}
      canonical={`https://sizy.co.kr`}
      openGraph={{
        type: 'website',
        url: `https://sizy.co.kr`,
        title: `sizy`,
        description: 'sizy는 매니저와 고객을 연결합니다',
        siteName: 'sizy',
        images: [{ url: 'https://assets.sizy.co.kr/landing/og_image.jpeg' }],
      }}
    ></DefaultSeo>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
