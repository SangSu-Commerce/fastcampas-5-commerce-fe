import React from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

interface CartPageProps extends ChakraProps {}

function CartPage({ ...basisProps }: CartPageProps) {
  const item = 0;
  return (
    <VStack pt="100px" pb="30px">
      <Box
        fontWeight="700"
        fontSize="16px"
        lineHeight="28px"
        textAlign="center"
        pb="30px"
      >
        장바구니가 비어있습니다. <br />
        상품을 추가해 보세요!
      </Box>
      <Button
        colorScheme="orange"
        background="#FF710B"
        borderRadius="25px"
        w="180px"
        size="lg"
      >
        <Text color="white">상품보러가기</Text>
      </Button>
    </VStack>
  );
}

export default CartPage;
