import React from 'react';

import { Container, Heading, Text, VStack } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

const Footer = () => {
  return (
    <>
      <Container bg="#1a1a1a33" maxW={LAYOUT.SIZE.WIDTH} height="285">
        <VStack w="100%" maxW={LAYOUT.SIZE.WIDTH} alignItems="flex-start">
          <Heading fontSize="16px" fontWeight="700" color="white" pt="35px">
            INCOURSE.RUN
          </Heading>
          <VStack alignItems="flex-start" color="white" pt="30px">
            <Text fontSize={12} fontWeight="300" lineHeight={2}>
              팀명 &#124; 상수커머스 <br />
              구성원 &#124; 권영민, 윤한솔 <br />
              이메일 mmmyoung95@gmail.com
            </Text>
            <Text fontSize={12} fontWeight="300" pt="40px" pb="55px">
              &#169; INCOURSE.RUN All Right Reserved.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </>
  );
};

export default Footer;
