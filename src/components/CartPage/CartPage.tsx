import React from 'react';

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
  Text,
  VStack,
} from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import Item from './Item';

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
      <VStack mt="10px" spacing="30px">
        <Item></Item>
      </VStack>
      {/* <VStack
        w="full"
        // pl="46px"
        // pr="16px"
        // spacing={0}
        pt="20px"
        // pb="20.5px"
        // position="relative"
      >
        <Flex w="full" justify="flex-start">
          <Img w="90px" h="90px" src="/icons/svg/shampoo.svg"></Img>
          <VStack pl="10px" spacing={0} alignItems="flex-start">
            <Box h="28px" color="black">
              [파격세일] 바스 & 샴푸
            </Box>
            <Box h="28px" color="#8C919F">
              [파격세일] 바스 & 샴푸 | 120ml
            </Box>
            <Box h="28px" color="#FF710B">
              27,000원
            </Box>
          </VStack>
        </Flex>
        <Checkbox colorScheme="orange" size="lg" marginLeft="-14px" />
        <CloseButton position="absolute" top="137px" right="10px"></CloseButton>
      </VStack> */}
    </Container>
  ) : (
    <VStack>
      <Box
        // position="absolute"
        pt="100px"
        width="171px"
        // height="56px"
        // left="102px"
        // top="180px"
        fontWeight="700"
        fontSize="16px"
        lineHeight="28px"
        textAlign="center"
        pb="30px"
      >
        장바구니가 비어있습니다. <br />
        상품을 추가해 보세요!
      </Box>
      <Box>
        <Button
          colorScheme="orange"
          height="50px"
          background="#FF710B"
          borderRadius="25px"
          w="180px"
          size="lg"
          // mt="30px"
          mb="30px"
          // display="block"
        >
          <Text color="white">상품보러가기</Text>
        </Button>
      </Box>
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
