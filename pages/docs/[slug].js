import React from "react";
import Layout from "../../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import "./doc.module.css";
import classes from "./doc.module.css";

const Doc = ({ frontmatter: { title, date, excerpt }, slug, content }) => {
  return (
    <Layout>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.excerpt}>{excerpt}</p>
          <p className={classes.date}>{date}</p>
        </div>

        <div className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("docs"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("docs", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default Doc;
