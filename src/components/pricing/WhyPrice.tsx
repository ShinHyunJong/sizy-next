import {
  chakra,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor="teal.400"
      rounded={'lg'}
    >
      <StatLabel fontSize="md" fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function WhyPrice() {
  return (
    <Container maxW="6xl" pb={8}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        보다 합리적인 가격으로!
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'택배,수선할 때 드는 매월 문자,전화비용'}
          stat={'약 3~4만원'}
        />
        <StatsCard
          title={'주문,입고,수선노트에 필요한 문구류'}
          stat={'약 6,900원'}
        />
        <StatsCard
          title={'주문,픽업,수선할 때 드는 단순 노동 비용'}
          stat={'+시간'}
        />
      </SimpleGrid>
      <Flex mt={8} justifyContent="center" py={16}>
        <Heading color="point.500">사이지로 더 편하고 저렴하게!</Heading>
      </Flex>
    </Container>
  );
}
