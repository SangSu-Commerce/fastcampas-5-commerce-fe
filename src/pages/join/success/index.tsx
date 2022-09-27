import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import JoinSuccessPage from '@components/JoinSuccessPage';

function JoinSuccess() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>상수커머스 | success</title>
      </Head>
      <JoinSuccessPage />
    </>
  );
}

export default JoinSuccess;
