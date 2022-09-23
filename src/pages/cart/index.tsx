import Head from 'next/head';

import CartPage from '@components/CartPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function Cart() {
  return (
    <>
      <Head>
        <title>장바구니</title>
      </Head>
      <HomeLayout content={<CartPage />} />
    </>
  );
}

export default Cart;
