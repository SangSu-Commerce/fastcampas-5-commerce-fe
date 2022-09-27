import React from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Flex,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from '@chakra-ui/react';

interface WithdrawalPageProps extends ChakraProps {}

function WithdrawalPage({ ...basisProps }: WithdrawalPageProps) {
  return (
    <form>
      <Box pt="50px" pb="80px">
        <Heading size="md">회원 탈퇴</Heading>
      </Box>
      <Box bg="gray.100" py="18px" w="full">
        <Text>
          회원 탈퇴 시 개인 정보 및 인코스런에서 만들어진
          <br />
          모든 데이터는 삭제됩니다. 한번 삭제된 정보는 복구
          <br />가 불가능합니다.
        </Text>
      </Box>
      <Box pt="14px" pb="13px">
        <Heading size="sm">회원 정보</Heading>
      </Box>
      <VStack justify="flex-start" w="full" spacing="10px" pt="15px">
        <HStack w="full">
          <Box>이름</Box>
          <Box>홍길동</Box>
        </HStack>
        <HStack w="full">
          <Box>핸드폰 번호</Box>
          <Box>010-1234-5678</Box>
        </HStack>
        <HStack w="full">
          <Box>이메일 주소</Box>
          <Box>abc@gmail.com</Box>
        </HStack>
      </VStack>
      <Box w="full" bg="gray.100" h="10px" mt="20px"></Box>
      <Box my="13.5px">
        <Heading size="sm">탈퇴 사유</Heading>
      </Box>
      <RadioGroup>
        <VStack align="flex-start" w="full">
          <Radio {...RadioStyle}>아이디 변경(재가입)</Radio>
          <Radio {...RadioStyle}>서비스 및 고객지원 불만족</Radio>
          <Radio {...RadioStyle}>타 브랜드 이용</Radio>
          <Radio {...RadioStyle}>기타</Radio>
          <Input {...InputStyle} placeholder="사유를 입력해주세요" />
        </VStack>
      </RadioGroup>
      <Box w="full" bg="gray.100" h="10px" mt="30px" mb="14px"></Box>
      <Box pb="80px">
        <Heading size="sm" lineHeight="28px" pb="13px">
          인코스런을 입력해주세요
        </Heading>
        <Input {...InputStyle} placeholder="인코스런" />
      </Box>
      <Flex justify="space-between">
        <Button {...ButtonStyle} color="primary.500" variant="outline">
          취소
        </Button>
        <Button {...ButtonStyle} color="#FFFFFF" bg="primary.500">
          탈퇴하기
        </Button>
      </Flex>
    </form>
  );
}

export default WithdrawalPage;

const InputStyle = {
  variant: 'outline',
  size: 'xs',
  px: '19px',
  py: '5px',
  h: '40px',
  fontSize: '16px',
  lineHeight: '28px',
  borderRadius: '100px',
  borderColor: '#1A1A1A',
  _focus: { border: '2px solid #FF710B', outline: 'none' },
  _placeholder: { color: 'gray.400' },
};

const RadioStyle = {
  colorScheme: 'primary',
};

const ButtonStyle = {
  w: '165px',
  h: '50px',
  borderRadius: '25px',
  size: 'sd',
  py: '12px',
  colorScheme: 'primary',
};
