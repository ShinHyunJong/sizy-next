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
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import { api } from '@/requests';

type FormValues = {
  brand: string;
  phone: string;
  text: string;
};

function Contact() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { submit } = router.query;
  const onConfirm = async (data: FormValues) => {
    try {
      setLoading(true);
      await api.post('/inquiry', {
        brand: data.brand,
        phone: data.phone,
        text: data.text,
      });
      setLoading(false);

      router.push('/contact?submit=true');
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Box mt="60px">
      <Container maxW="6xl" py={16}>
        <Heading mb={8}>도입 문의</Heading>
        {!submit ? (
          <>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <Stack>
                <Controller
                  name="brand"
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
                name="text"
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
                        placeholder="ex) 언제부터 사용가능한가요?"
                      ></Textarea>
                    </FormControl>
                  );
                }}
              />
            </Flex>
            <Flex py={8}>
              <Button
                onClick={handleSubmit(onConfirm)}
                isDisabled={!isValid}
                colorScheme="point"
                size="lg"
                isLoading={loading}
              >
                신청하기
              </Button>
            </Flex>
          </>
        ) : (
          <Stack>
            <Heading fontSize="lg">문의가 접수되었습니다.</Heading>
            <Text>24시간 내에 답변드리겠습니다. 감사합니다.</Text>
          </Stack>
        )}
      </Container>
    </Box>
  );
}

export default Contact;
