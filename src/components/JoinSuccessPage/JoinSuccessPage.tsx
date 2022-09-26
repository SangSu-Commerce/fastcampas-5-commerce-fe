import React from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Container,
  Img,
  VStack,
} from '@chakra-ui/react';

interface JoinSuccessPageProps extends ChakraProps {}

function JoinSuccessPage({ ...basisProps }: JoinSuccessPageProps) {
  return (
    <Container maxW="375px" h="812px">
      <VStack alignItems="flex-start" pt="80px" spacing={0}>
        <Box {...HeadTitle}>
          회원가입이 <br />
          완료되었습니다.
        </Box>
        <Box {...SubTitle}>관심사별로 자유롭게 소통해보세요!</Box>
      </VStack>
      <VStack spacing={0}>
        <Box pt="100px" pb="237px" alignItems="center">
          <Img src="/icons/svg/clap.svg" />
        </Box>
        <Button {...ButtonStyle} colorScheme="orange" py="15px">
          시작하기
        </Button>
      </VStack>
    </Container>
  );
}

export default JoinSuccessPage;

const HeadTitle = {
  fontWeight: 700,
  fontSize: '26px',
  lineHeight: '38px',
};

const SubTitle = {
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '18px',
  color: '#8C919F',
};

const ButtonStyle = {
  width: '343px',
  height: '50px',
  borderRadius: '25px',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '28px',
  bgColor: '#FF710B',
};
