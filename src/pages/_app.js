import '@/styles/globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import Layout from '../components/layout';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${playfair.variable} ${inter.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
