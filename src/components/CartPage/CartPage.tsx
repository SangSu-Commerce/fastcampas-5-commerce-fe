import React from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Checkbox,
  Container,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

interface CartPageProps extends ChakraProps {}

function CartPage({ ...basisProps }: CartPageProps) {
  const item = 0;
  return item !== 0 ? (
    // <Box>test1</Box>
    <Container>
      <VStack>
        <Flex
          {...TextStyle}
          px="16px"
          py="11px"
          w="375px"
          justify="space-between"
          maxW={LAYOUT.SIZE.WIDTH}
        >
          <Flex>
            <Checkbox alignSelf="center" colorScheme="orange" size="lg">
              모두선택
            </Checkbox>
          </Flex>
          <Box _hover={{ cursor: 'pointer' }}>선택 삭제</Box>
        </Flex>
      </VStack>
      <VStack>
        <Flex w="375px" pl="10px" alignItems="flex-start">
          <VStack>
            <Box>[파격세일] 바스 & 샴푸</Box>
            <Box>[파격세일] 바스 & 샴푸</Box>
          </VStack>
        </Flex>
      </VStack>
      <Checkbox colorScheme="orange" size="lg" marginLeft="-14px" />
    </Container>
  ) : (
    <VStack>
      <Box
        // position="absolute"
        pt="100px"
        width="171px"
        height="56px"
        left="102px"
        top="180px"
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
        height="50px"
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

const TextStyle = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '28px',
  color: 'gray.600',
};
