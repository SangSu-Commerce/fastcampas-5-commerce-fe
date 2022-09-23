import { Container, Flex, Image } from '@chakra-ui/react';


import SearchIcon from '@components/common/@Icons/System/Search';
import { LAYOUT } from '@constants/layout';
import { CartIcon, LogoIcon, MenuIcon } from 'generated/icons/MyIcons';

function Header(){
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
        <MenuIcon cursor="pointer"/>
        <LogoIcon cursor="pointer"/>
        <CartIcon cursor="pointer"  />
      </Flex>
   </Container>
  )
}

export default Header;