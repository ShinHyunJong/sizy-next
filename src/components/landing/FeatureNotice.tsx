import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

// import customerNotiImg from '@/public/assets/images/landing/customerNoti.png';
import { fontSize } from '@/styles';

function FeatureNotice() {
  return (
    <Box bg="gray.200" py={24}>
      <Container maxW="4xl">
        <Stack spacing={12}>
          <Stack spacing={1}>
            <Fade direction="up" triggerOnce>
              <Heading
                wordBreak="keep-all"
                fontSize={fontSize.titleHeader}
              ></Heading>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                고객 정보는 매니저님의 자산입니다.
              </Heading>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                프라이빗하고 안전하게 관리하세요.
              </Heading>
            </Fade>
          </Stack>
          {/* <Flex
            bg="gray.100"
            justifyContent="center"
            borderRadius="2xl"
            p={[0, 4, 8]}
          ></Flex>
          <Flex
            bg="gray.100"
            justifyContent="center"
            borderRadius="2xl"
            p={[0, 4, 8]}
          ></Flex> */}
        </Stack>
      </Container>
    </Box>
  );
}

export default FeatureNotice;
