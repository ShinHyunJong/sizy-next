/* eslint-disable @typescript-eslint/naming-convention */
import { Box, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

function KakaoTrialButton() {
  const [redirecting, setRedirecting] = useState(false);
  const router = useRouter();
  const handleTrial = async () => {
    if (typeof window === 'undefined') return;
    if (!window.Kakao.Auth) return;
    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}${router.pathname}`,
    });
  };

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
      {redirecting ? <Spinner></Spinner> : '카카오로 3초만에 신청하기'}
    </Box>
  );
}

export default KakaoTrialButton;
