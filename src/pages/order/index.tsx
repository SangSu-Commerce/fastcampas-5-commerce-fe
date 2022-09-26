import Head from 'next/head';
import React from 'react';

import OrderPage from '@components/OrderPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function index() {
  return (
    <>
      <Head>
        <title>주문결제</title>
      </Head>
      <HomeLayout content={<OrderPage />} />
    </>
  );
}

export default index;
