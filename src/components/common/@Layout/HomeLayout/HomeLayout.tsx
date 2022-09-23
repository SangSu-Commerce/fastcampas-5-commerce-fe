import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

// import HomeHeader from './_fragments/HomeHeader';
import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';

interface HomeLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const HomeLayout = ({
  header = <Header />,
  footer = <Footer />,
  containerProps,
  content,
}: HomeLayoutProps) => {
  return (
    <Container px="0" position="relative" h="auto" maxW="375px">
      {header}
      <Container
        pt={LAYOUT.HEADER.HEIGHT}
        {...containerProps}
        h="auto"
        pb="275px"
        minH="100%"
      >
        {content}
      </Container>
      {footer}
    </Container>
  );
};

export default HomeLayout;
