/* eslint-disable @typescript-eslint/naming-convention */
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { api, kakaoApi } from '@/requests';

function KakaoTrialButton() {
  const router = useRouter();
  const handleTrial = async () => {
    if (typeof window === 'undefined') return;
    if (!window.Kakao) return;
    // console.log(window.Kakao);
    // console.log(router);

    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}${router.pathname}`,
    });
  };

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
      window.location.href = `https://store.sizy.co.kr/trial/${trialData}`;
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
    <Box
      role="button"
      onClick={handleTrial}
      fontWeight="bold"
      w="fit-content"
      p={4}
      rounded="lg"
      bg="#F7E600"
    >
      카카오로 신청하기
    </Box>
  );
}

export default KakaoTrialButton;