import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Link from "next/link";
import classes from "./layout.module.css";
import { useRouter } from "next/router";

const Layout = ({ children, commits }) => {
  const router = useRouter();
  console.log();
  console.log(commits);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentCommit, setCurrentCommit] = useState(commits.values[0].hash);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.asPath.split("/")[2] != currentCommit) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [currentCommit, router]);

  return (
    <div>
      <section className={classes.header}>
        <div className={classes.headertitle}>
          <h3>Robolaunch Docs</h3>
        </div>
        <div className={classes.headerlist}>
          <div className={classes.commitlist}>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={classes.dropdownheader}
            >
              {loading ? "Loading..." : <p>{currentCommit}</p>}
            </div>
            {isDropdownOpen && (
              <ul className={classes.headercommits}>
                {commits.values.map((commit, index) => (
                  <li
                    key={commit.hash}
                    onClick={() => {
                      setCurrentCommit(commit.hash);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <Link href={`/docs/${commit.hash}`}>{commit.hash}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      <main className={classes.main}>
        <section className={classes.content}>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
