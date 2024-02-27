import {
  chakra,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
} from '@chakra-ui/react';

interface StatsCardProps {
  title: string;
}
function StatsCard(props: StatsCardProps) {
  const { title } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor="teal.400"
      rounded={'lg'}
    >
      <StatLabel wordBreak="keep-all" fontSize="xl" fontWeight={'medium'}>
        {title}
      </StatLabel>
      {/* <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber> */}
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
        절감되는 비용과 절약되는 시간!
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'기존에 들던 전화,문자 비용'} />
        <StatsCard title={'고객,주문,수선노트에 필요한 문구류'} />
        <StatsCard title={'고객,주소,운송장 번호 찾는데 걸리는 시간'} />
      </SimpleGrid>
      <Flex mt={8} justifyContent="center" py={16}>
        <Heading color="point.500">사이지로 더 편하고 저렴하게!</Heading>
      </Flex>
    </Container>
  );
}
