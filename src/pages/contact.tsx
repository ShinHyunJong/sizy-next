import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

type FormValues = {
  shop: string;
  phone: string;
};

function Contact() {
  const { control } = useForm<FormValues>();
  return (
    <Box mt="60px">
      <Container maxW="6xl" py={16}>
        <Heading mb={8}>도입 문의</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          <Stack>
            <Controller
              name="shop"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <FormControl w="full" isRequired>
                    <Flex>
                      <FormLabel fontWeight="bold">브랜드 지점명</FormLabel>
                    </Flex>
                    <Input
                      {...field}
                      colorScheme="point"
                      variant="filled"
                      placeholder="ex)비비안 현대무역센터점"
                    ></Input>
                  </FormControl>
                );
              }}
            />
          </Stack>
          <Stack>
            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <FormControl w="full" isRequired>
                    <FormLabel fontWeight="bold">담당자 번호</FormLabel>
                    <PatternFormat
                      placeholder="010-1234-1234"
                      customInput={Input}
                      variant="filled"
                      format="###-####-####"
                      type="tel"
                      {...field}
                    />
                  </FormControl>
                );
              }}
            />
          </Stack>
        </SimpleGrid>
        <Flex mt={4}>
          <Controller
            name="shop"
            control={control}
            render={({ field }) => {
              return (
                <FormControl w="full">
                  <Flex>
                    <FormLabel fontWeight="bold">기타 문의사항</FormLabel>
                  </Flex>
                  <Textarea
                    {...field}
                    colorScheme="point"
                    variant="filled"
                    rows={5}
                    placeholder="ex)비비안 현대무역센터점"
                  ></Textarea>
                </FormControl>
              );
            }}
          />
        </Flex>
        <Flex py={8}>
          <Button colorScheme="point" size="lg">
            신청하기
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Contact;
