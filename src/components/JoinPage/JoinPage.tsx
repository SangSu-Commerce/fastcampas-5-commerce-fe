import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';

interface JoinPageProps extends ChakraProps {}

function JoinPage({ ...basisProps }: JoinPageProps) {
  return (
    <Box {...basisProps}>
      <Text>JoinPage</Text>
    </Box>
  );
}

export default JoinPage;
