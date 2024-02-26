import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import babaraLogo from '@/public/assets/images/landing/barbara.png';
import calvinLogo from '@/public/assets/images/landing/calvin.png';
import trimphLogo from '@/public/assets/images/landing/trimph.png';
import vivienLogo from '@/public/assets/images/landing/vivien.png';
import { fontSize } from '@/styles';

const reviewList = [
  {
    id: 1,
    name: '비비안',
    review: `고객님들 한테 이제 배송,픽업문의 전화가 안오는 것 같아요.\n 특히 명절에 배송 관련해서 매장에 전화가 엄청 왔는데 이번 설에 전화 한번 안왔네요.`,
    src: vivienLogo,
  },
  {
    id: 2,
    name: '바바라',
    review: `이제 이거 없으면 안돼요!\n 고객 기억안날 때 그냥 검색하면 되니까 너무 편한 것 같아요.`,
    src: babaraLogo,
  },
  {
    id: 3,
    name: '캘빈클라인',
    review: `개인번호로 고객한테 연락해서 찝찝했는데, 카카오 알림톡으로 발송하니까 좋습니다.`,
    src: calvinLogo,
  },
  {
    id: 4,
    name: '트라이엄프',
    review: `둘째가 제 글씨를 서로 못 알아본다고 힘들었는데\n 그럴 일이 없어서 좋았어요.`,
    src: trimphLogo,
  },
];

function Review() {
  return (
    <Box bg="gray.50" py={24}>
      <Container maxW="4xl">
        <Stack spacing={12}>
          <Fade direction="up" triggerOnce>
            <Stack spacing={1} textAlign="center">
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                이미 매니저님들이
              </Heading>
              <Heading wordBreak="keep-all" fontSize={fontSize.titleHeader}>
                좋아하고 있어요.
              </Heading>
            </Stack>
          </Fade>
          <SimpleGrid columns={[1, 2, 2]} spacing={4}>
            {reviewList.map((x) => {
              return (
                <Box
                  whiteSpace="pre-line"
                  wordBreak="break-word"
                  key={x.id}
                  bg="white"
                  p={4}
                  borderRadius="2xl"
                >
                  <Flex h="200px" justifyContent="center" alignItems="center">
                    <Image alt={x.name} unoptimized src={x.src}></Image>
                  </Flex>
                  <Text color="gray.800" fontSize={['md', 'lg', 'xl']}>
                    {`"`}
                    {x.review}
                    {`"`}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}

export default Review;
