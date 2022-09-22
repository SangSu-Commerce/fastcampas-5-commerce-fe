import React from 'react';
import Header from '../Layouts/Header';

import { Container, ContainerProps } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

// import HomeHeader from './_fragments/HomeHeader';
import Footer from '../Layouts/Footer';

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
    <>
      {header}
      <Container pt={LAYOUT.HEADER.HEIGHT} {...containerProps}>
        {content}
      </Container>
      {footer}
    </>
  );
};

export default HomeLayout;
