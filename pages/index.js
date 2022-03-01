import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Do Doc</title>
      </Head>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get files from the docs dir.
  const files = fs.readdirSync(path.join("docs"));
  // Get slug and frontmatter
  const docs = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("docs", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      docs: docs,
    },
  };
}
