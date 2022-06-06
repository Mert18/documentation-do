import Head from "next/head";
import Layout from "../components/Layout";
import { loadCommits } from "../lib/loadCommits";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home({ commits }) {
  const router = useRouter();
  useEffect(() => {
    router.push(`/docs/${commits.values[0].hash}`);
  });
  return (
    <Layout commits={commits}>
      <Head>
        <title>Do Doc</title>
      </Head>
    </Layout>
  );
}

export async function getStaticProps() {
  const commits = await loadCommits();
  return { props: { commits } };
}
