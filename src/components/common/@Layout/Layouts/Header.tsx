/* eslint-disable prettier/prettier */
import { Container, Box, VStack, Drawer, DrawerBody, DrawerCloseButton, DrawerOverlay, DrawerContent, Flex, useDisclosure, Img } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import { CartIcon, ExitIcon, LogoIcon, MenuIcon } from 'generated/icons/MyIcons';

function Header(){
const{ onOpen, isOpen, onClose } = useDisclosure();

  return(
  <Container maxW={LAYOUT.SIZE.WIDTH} px={0}>
    <Flex //
      as="header"
      alignItems="center"
      justifyContent="space-between"
      w="375px"
      px="16px"
      position="fixed"
      zIndex={999}
      transition="all 0.3s"
      h={LAYOUT.HEADER.HEIGHT}>
        <MenuIcon cursor="pointer" onClick={onOpen}/>
        <LogoIcon cursor="pointer"/>
        <CartIcon cursor="pointer"  />
      </Flex>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent borderRight="62px solid rgba(26, 26, 26, 0.2);">
          <DrawerCloseButton />
          <DrawerBody pt="80px" px={0}>
            <Box pl="16px" {...TitleText}>카테고리</Box>
            <VStack pt="46px" alignItems="flex-start" spacing={0} fontWeight="700" fontSize="16px" lineHeight="28px">
              <Flex h="60px" pl="16px" w="full" alignItems="center" borderTop="1px solid #F2F3F4" cursor="pointer">홈</Flex>
              <Flex h="60px" pl="16px" w="full" alignItems="center" borderTop="1px solid #F2F3F4" cursor="pointer">상품보기</Flex>
              <Flex h="60px" pl="16px" w="full" alignItems="center" borderY="1px solid #F2F3F4" cursor="pointer">마이페이지</Flex>
            </VStack>
          <Flex {...TitleText} pl="16px" bottom="25px" position="absolute" cursor="pointer">
            <Img src='icons/svg/exit.svg'/>
            <Box>로그아웃</Box>
          </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
   </Container>
  )
}

export default Header;

const TitleText = {
  fontWeight: "700",
  fontSize: "20px",
   lineHeight: "29px"
}