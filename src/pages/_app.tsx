import '../styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import Header from '@/components/Header';
import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <DefaultSeo
      title={'사이지::오프라인 매장을 위한 온라인 주문장'}
      description={`사이지는 온라인 주문장으로 매장에서의 번거로움을 해소합니다.`}
      canonical={`https://sizy.co.kr`}
      openGraph={{
        type: 'website',
        url: `https://sizy.co.kr`,
        title: `sizy`,
        description:
          '사이지는 온라인 주문장으로 매장에서의 번거로움을 해소합니다.',
        siteName: 'sizy',
        images: [{ url: 'https://assets.sizy.co.kr/landing/og_image.jpeg' }],
      }}
    ></DefaultSeo>
    <Header></Header>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
