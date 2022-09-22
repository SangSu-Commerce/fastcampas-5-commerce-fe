import React from 'react';
import { Box, ChakraProps, VStack, Img } from '@chakra-ui/react';
import SocialButton from '@components/common/SocialButton';



interface LoginPageProps extends ChakraProps {}

function LoginPage({ ...basisProps }: LoginPageProps) {
  return (
    <VStack
      backgroundColor="#FF710B"
      h="812px"
      justify="space-between"
      py="50px"
    >
      <Box></Box>
      <Img src='icons/svg/login-logo.svg'/>
      <SocialButton data={{social: 'kakao',link: '' }} size="md"></SocialButton>
  </VStack>
    
  );
}

export default LoginPage;
