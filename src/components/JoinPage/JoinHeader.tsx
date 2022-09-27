import React from 'react';

import { Container } from '@chakra-ui/react';
import { Flex, Image } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

function JoinHeader() {
  return (
    <Container maxW={LAYOUT.SIZE.WIDTH}>
      <Flex
        as="header"
        justifyContent="flex-start"
        position="fixed"
        alignItems="center"
        h={LAYOUT.HEADER.HEIGHT}
        bg="white"
      >
        <Image src="icons/svg/join-logo.svg" alt="join" />
      </Flex>
    </Container>
  );
}

export default JoinHeader;
