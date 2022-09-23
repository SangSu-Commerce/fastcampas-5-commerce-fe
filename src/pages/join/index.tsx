import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import JoinPage from '@components/JoinPage';

function Join() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>똑똑한 개발자 | join</title>
      </Head>
      <HomeLayout content={<JoinPage />} />
    </>
  );
}

export default Join;
