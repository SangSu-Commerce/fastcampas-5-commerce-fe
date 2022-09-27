import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import WithdrawalPage from '@components/WithdrawalPage';

function Withdrawal() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | withdrawal</title>
      </Head>
      <HomeLayout content={<WithdrawalPage />} />
    </>
  );
}

export default Withdrawal;
