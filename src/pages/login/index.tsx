import Head from 'next/head';
import LoginPage from '@components/LoginPage';
import LoginLayout from '@components/LoginPage/LoginLayOut';

function Login() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>상수커머스 | login</title>
      </Head>
      <LoginLayout content={<LoginPage />} />
    </>
  );
}

export default Login;
