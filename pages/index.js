import Head from "next/head";

import HomeServiceCards from "../components/HomeServiceCards";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cyber Lily Software - Zimbabwe Web Development Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeServiceCards />
    </div>
  );
}