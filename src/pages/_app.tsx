import '../styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import Hotjar from '@hotjar/browser';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '@/components/Header';
import theme from '@/styles/theme';

const siteId = 3839902;
const hotjarVersion = 6;

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, []);

  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init('043762361bb87c486f61fabb9912774c');
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <DefaultSeo
          title={'사이지::오직 나만을 위한 고객 약속 관리'}
          description={`사이지는 내 매장의 특별함을 만듭니다.`}
          canonical={`https://sizy.co.kr`}
          openGraph={{
            type: 'website',
            url: `https://sizy.co.kr`,
            title: `sizy`,
            description: '사이지는 내 매장의 특별함을 만듭니다.',
            siteName: 'sizy',
            images: [{ url: 'https://assets.sizy.co.kr/landing/ogImage.jpeg' }],
          }}
        ></DefaultSeo>
        <Header></Header>
        <Component {...pageProps} />
      </ChakraProvider>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      ></Script>
    </QueryClientProvider>
  );
};

export default MyApp;
