"use client";

import Home from "./home/home"
import { getLayout } from '@vercel/examples-ui'

export default function Initial({ Component, pageProps }) {
  const Layout = getLayout(Component)
  return (
    <Layout path="edge-middleware/geolocation">
      <Home {...pageProps} />
    </Layout>
  );
}
