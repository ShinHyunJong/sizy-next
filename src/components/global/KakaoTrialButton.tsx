import { Box } from '@chakra-ui/react';

function KakaoTrialButton() {
  return (
    <Box
      cursor="pointer"
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
