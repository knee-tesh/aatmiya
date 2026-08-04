import "@/styles/globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aatmiya Foundation — Care That Comes From the Soul</title>
        <meta
          name="description"
          content="Aatmiya is a non-profit dedicated to providing elderly citizens with group activities, health services, and companionship across India."
        />
        <meta property="og:title" content="Aatmiya Foundation" />
        <meta property="og:description" content="Care That Comes From the Soul" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aatmiya Foundation",
              description: "Non-profit dedicated to providing elderly citizens with group activities, health services, and companionship.",
              url: "https://aatmiya.org",
              logo: "/images/logo.svg",
            }),
          }}
        />
      </Head>
      <div className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
