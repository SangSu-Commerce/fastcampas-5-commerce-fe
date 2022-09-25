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
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Item() {
  return (
    <VStack
      w="full"
      pl="16px"
      // pr="16px"
      // spacing={0}
      pt="20px"
      // pb="20.5px"
      // position="relative"
    >
      <Flex w="310px" justify="flex-start">
        <Img w="90px" h="90px" src="/icons/svg/shampoo.svg"></Img>
        <VStack pl="5px" spacing={0} alignItems="flex-start">
          <Box h="28px" color="black">
            [파격세일] 바스 & 샴푸
          </Box>
          <Box font-size="12px" h="28px" color="#8C919F">
            [파격세일] 바스 & 샴푸 | 120ml
          </Box>
          <Box h="28px" color="#FF710B">
            27,000원
          </Box>
        </VStack>
      </Flex>
      <Checkbox
        colorScheme="orange"
        size="lg"
        position="absolute"
        left="16px"
        top="152px"
      />
      <CloseButton position="absolute" top="146px" right="10px"></CloseButton>
      <Flex
        alignItems="flex-start"
        mt="15px"
        p="10px"
        w="310px"
        bg="gray.200"
        borderRadius="5px"
      >
        <VStack>
          <Box color="#8C919F">바스 & 샴푸</Box>
          <Flex justify="space-between" w="full" mt="4px">
            <Flex h="25px" alignSelf="center">
              <Box
                position="relative"
                bg="white"
                border="1px solid #EAECF0"
                borderRadius="5px 0px 0px 5px"
                p={0}
                w="25px"
                h="25px"
                _after={{
                  content: '""',
                  display: 'block',
                  height: '1px',
                  width: '9px',
                  backgroundColor: '#4A4D55',
                  position: 'absolute',
                  top: '11px',
                  left: '7px',
                }}
                _hover={{ cursor: 'pointer' }}
                // onClick={decQuantity}
              ></Box>
              <Flex
                w="23px"
                h="full"
                borderTop="1px solid #EAECF0"
                borderBottom="1px solid #EAECF0"
              >
                <Input
                  w="full"
                  h="full"
                  border="none"
                  fontSize="12px"
                  textAlign="center"
                  color="gray.800"
                  p={0}
                  bg="white"
                  // value={item.quantity}
                  readOnly
                ></Input>
              </Flex>
              <Box
                position="relative"
                bg="white"
                border="1px solid #EAECF0"
                borderRadius="0px 5px 5px 0px"
                w="25px"
                h="25px"
                p={0}
                _before={{
                  content: '""',
                  display: 'block',
                  width: '1px',
                  height: '9px',
                  backgroundColor: '#4A4D55',
                  position: 'absolute',
                  top: '7px',
                  left: '11px',
                }}
                _after={{
                  content: '""',
                  display: 'block',
                  height: '1px',
                  width: '9px',
                  backgroundColor: '#4A4D55',
                  position: 'absolute',
                  top: '11px',
                  left: '7px',
                }}
                // onClick={incQuantity}
                _hover={{ cursor: 'pointer' }}
              ></Box>
            </Flex>
            {/* <Flex {...TitleText} color="gray.600" alignItems="center">50,000원</Flex> */}
          </Flex>
        </VStack>
      </Flex>
    </VStack>
  );
}

const TitleText = {
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '28px',
};
