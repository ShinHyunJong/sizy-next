/* eslint-disable @typescript-eslint/naming-convention */

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Footer from '@/components/landing/Footer';
import Inquiry from '@/components/pricing/Inquiry';
import Price from '@/components/pricing/Pricing';
import Process from '@/components/pricing/Process';
import WhyPrice from '@/components/pricing/WhyPrice';
import { api, kakaoApi } from '@/requests';

export default function PricingPage() {
  const router = useRouter();

  const getAccessToken = async (code: string) => {
    try {
      const { data } = await kakaoApi.post('/oauth/token', {
        grant_type: 'authorization_code',
        client_id: '07c3e1bde67132e3abe2370e2b2d53c4',
        redirect_uri: `${window.location.origin}${router.pathname}`,
        code,
      });
      const { access_token } = data;
      window.Kakao.Auth.setAccessToken(access_token);
      const kakaoResult = await window.Kakao.API.request({
        url: '/v2/user/me',
      });
      const { id, kakao_account } = kakaoResult;
      const { email, phone_number, profile } = kakao_account;
      const { profile_image_url, nickname } = profile;

      const { data: trialData } = await api.post('/seller/trial', {
        kakaoId: id,
        name: nickname,
        phone: `0${phone_number.replace(/\+82\s*|-/g, '').trim()}`,
        email,
        profileImg: profile_image_url,
      });
      if (trialData.tokens) {
        router.push(`https://store.sizy.co.kr/auth/signIn`);
      } else {
        // window.location.href = `https://store.sizy.co.kr/trial/${trialData}`;
        router.push(`https://store.sizy.co.kr/trial/${trialData}`);
      }
      window.Kakao.Auth.setAccessToken(null);
    } catch (error) {
      router.replace(router.pathname);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (router.query.code) {
      getAccessToken(router.query.code as string);
    }
  }, [router.query.code]);
  return (
    <>
      <Price></Price>
      <WhyPrice></WhyPrice>
      <Process></Process>
      <Inquiry></Inquiry>
      <Footer></Footer>
    </>
  );
}
