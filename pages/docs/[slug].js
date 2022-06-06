import React from "react";
import Layout from "../../components/Layout";
import matter from "gray-matter";
import marked from "marked";
import "./doc.module.css";
import classes from "./doc.module.css";
import { loadCommits } from "../../lib/loadCommits";

const Doc = ({ content, commits }) => {
  return (
    <Layout commits={commits}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const response = await fetch(
    "https://api.bitbucket.org/2.0/repositories/kaesystems/robolaunch/commits"
  );
  const res = await response.json();
  const commits = [];
  res.values.map((value) => {
    commits.push(value.hash);
  });

  const paths = commits.map((commit) => ({
    params: {
      slug: commit,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const response = await fetch(
    `https://bitbucket.org/kaesystems/robolaunch/raw/${slug}/docs/documentation.md`
  );
  const res = await response.text();
  const commits = await loadCommits();

  const { content } = matter(res);
  return {
    props: {
      commits,
      slug,
      content,
    },
  };
}

export default Doc;
