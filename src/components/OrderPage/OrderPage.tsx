import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  Box,
  Button,
  ChakraProps,
  Checkbox,
  CloseButton,
  Container,
  Flex,
  HStack,
  Img,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

import { FormValues } from './types';

function OrderPage() {
  //: SubmitHandler<FormValues>
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack alignItems="flex-start" pt="50px" pb="80px" px="16px">
        <Box {...TitleText}>주문결제</Box>
        <Box w="full">
          <Box {...SubTitleText} w="full" pt="80px" pb="11px">
            주문상품
          </Box>
          <Flex w="310px" justify="flex-start">
            <Img w="90px" h="90px" src="/icons/svg/shampoo.svg"></Img>
            <VStack pl="5px" spacing={0} alignItems="flex-start">
              <HStack w="210px" justify="space-between">
                <Box h="28px" color="black">
                  [파격세일] 바스 & 샴푸
                </Box>
              </HStack>
              <Box fontSize="12px" h="28px" color="#8C919F">
                [파격세일] 바스 & 샴푸 | 120ml
              </Box>
              <Box h="28px" color="#FF710B">
                27,000원
              </Box>
            </VStack>
          </Flex>
        </Box>
        <Box w="full">
          <Box {...SubTitleText} pt="45px" pb="40px" w="full">
            주문자 정보
          </Box>
          <VStack w="full" pb="50px" alignItems="flex-start">
            <Box w="full">
              <Text {...NameStyle}>이름</Text>
              <Input
                style={{
                  border: errors.name ? '1px solid red' : '',
                  outline: errors.name ? '1px solid red' : '',
                }}
                {...register('name', { required: true, minLength: 2 })}
                {...InputStyle}
              ></Input>
              {errors.name && <p>요구사항 충족 바람</p>}
            </Box>
            <Box w="full">
              <Text {...NameStyle}>핸드폰 번호</Text>
              <Input
                // defaultValue="test"
                style={{
                  border: errors.phone ? '1px solid red' : '',
                  outline: errors.phone ? '1px solid red' : '',
                }}
                {...register('phone', { required: true, minLength: 2 })}
                {...InputStyle}
              ></Input>
              {errors.phone && <p>요구사항 충족 바람</p>}
            </Box>
            <Box w="full">
              <Text {...NameStyle}>주소</Text>
              <Flex justify="space-between">
                <Input
                  w="249px"
                  style={{
                    border: errors.adress ? '1px solid red' : '',
                    outline: errors.adress ? '1px solid red' : '',
                  }}
                  {...register('adress', { required: true, minLength: 2 })}
                  {...InputStyle}
                ></Input>
                <Button
                  colorScheme="primary"
                  w="74px"
                  ml="10px"
                  h="40px"
                  borderRadius="5px"
                  py="11px"
                >
                  우편번호 검색
                </Button>
                {errors.name && <p>요구사항 충족 바람</p>}
              </Flex>
              <Input
                w="full"
                mt="10px"
                style={{
                  border: errors.adress ? '1px solid red' : '',
                  outline: errors.adress ? '1px solid red' : '',
                }}
                {...register('adress', { required: true, minLength: 2 })}
                {...InputStyle}
              ></Input>
            </Box>
            <input type={'submit'} style={{ backgroundColor: '#a1eafb' }} />
          </VStack>
        </Box>
        <Box w="full" h="1px" bg="gray.200">
          <Box w="full">
            <Flex
              w="full"
              pt="50px"
              pb="40px"
              justify="space-between"
              alignItems="center"
            >
              <Box {...SubTitleText}>배송지 정보</Box>
            </Flex>
          </Box>
        </Box>
      </VStack>
    </form>
  );
}

export default OrderPage;

const TitleText = {
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '29px',
};

const SubTitleText = {
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '28px',
};

const NameStyle = {
  fontSize: '12px',
  color: 'primary.500',
  fontWeight: 700,
  lineheight: '18px',
  pb: '10px',
};
const InputStyle = {
  variant: 'outline',
  size: 'xs',
  px: '19px',
  py: '5px',
  h: '40px',
  fontSize: '16px',
  outline: '1px solid',
  borderRadius: '100px',
  lineHeight: '28px',
  _focus: { border: '2px solid #FF710B', outline: '1px solid #FF710B' },
  _placeholder: { color: 'gray.400' },
};
