import '../styles/global.scss';

import { Session } from 'next-auth';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

import { Header } from '../components/Header';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <NextAuthProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
