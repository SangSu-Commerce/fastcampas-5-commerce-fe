import Head from 'next/head';
import JoinPage from '@components/JoinPage';
import JoinLayout from '@components/JoinPage/JoinLayout';

function Join() {
  return (
    <>
      <Head>
        <title>상수커머스 | join</title>
      </Head>
      <JoinLayout content={<JoinPage />} />
    </>
  );
}

export default Join;
