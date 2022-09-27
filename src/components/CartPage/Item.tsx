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
    <VStack {...ItemContainer}>
      <Checkbox {...ItemCheckBox} />
      <Flex w="310px" justify="flex-start">
        <Img w="90px" h="90px" src="/icons/svg/shampoo.svg"></Img>
        <VStack pl="5px" spacing={0} alignItems="flex-start">
          <HStack w="210px" justify="space-between">
            <Box h="28px" color="black">
              [파격세일] 바스 & 샴푸
            </Box>
            <CloseButton right="30px"></CloseButton>
          </HStack>

          <Box font-size="12px" h="28px" color="#8C919F">
            [파격세일] 바스 & 샴푸 | 120ml
          </Box>
          <Box h="28px" color="#FF710B">
            27,000원
          </Box>
        </VStack>
      </Flex>

      <Flex {...GrayContainer}>
        <VStack>
          <Box w="300px" color="#8C919F">
            바스 & 샴푸
          </Box>
          <Flex justify="space-between" w="full" mt="4px">
            <Flex h="25px" alignSelf="center">
              <Box
                position="relative"
                {...InputButton}
                _after={HorizonBar}
                _hover={{ cursor: 'pointer' }}
                // onClick={decQuantity}
              ></Box>
              <Flex {...InputValContainer}>
                <Input
                  w="full"
                  h="full"
                  border="none"
                  fontSize="12px"
                  textAlign="center"
                  color="gray.800"
                  p={0}
                  bg="white"
                  value="0" //추후 가변형으로
                  readOnly
                />
              </Flex>
              <Box
                position="relative"
                {...InputButton}
                _before={VerticalBar}
                _after={HorizonBar}
                // onClick={incQuantity}
                _hover={{ cursor: 'pointer' }}
              />
            </Flex>
            <Flex {...TitleText} color="gray.600">
              <Box>50,000원</Box>
            </Flex>
          </Flex>
        </VStack>
      </Flex>
      <Flex justify="space-between" w="310px" pt="5px">
        <Box {...SubText} color="black">
          배송비 무료
          {/* {total > 30000 ? '배송비 무료' : ''} */}
        </Box>
        <Box {...PriceText}>50,000원</Box>
      </Flex>
    </VStack>
  );
}

const TitleText = {
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '28px',
};
const PriceText = {
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '29px',
};

const SubText = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '28px',
  color: 'gray.600',
};

const ItemContainer = {
  w: 'full',
  pl: '16px',
  // pr="16px"
  // spacing={0}
  pt: '20px',
  // pb="20.5px"
  // position="relative"
};

const ItemCheckBox = {
  colorScheme: 'orange',
  size: 'lg',
  right: '170px',
  top: '30px',
};

const GrayContainer = {
  alignItems: 'flex-start',
  mt: '15px',
  p: '10px',
  w: '315px',
  bg: 'gray.200',
  borderRadius: '5px',
};

const HorizonBar = {
  content: '""',
  display: 'block',
  height: '1px',
  width: '9px',
  backgroundColor: '#4A4D55',
  position: 'absolute',
  top: '11px',
  left: '7px',
};

const VerticalBar = {
  content: '""',
  display: 'block',
  width: '1px',
  height: '9px',
  backgroundColor: '#4A4D55',
  position: 'absolute',
  top: '7px',
  left: '11px',
};

const InputButton = {
  background: 'white',
  border: '1px solid #EAECF0',
  borderRadius: '0px 5px 5px 0px',
  w: '25px',
  h: '25px',
  padding: 0,
};

const InputValContainer = {
  w: '23px',
  h: 'full',
  borderTop: '1px solid #EAECF0',
  borderBottom: '1px solid #EAECF0',
};
