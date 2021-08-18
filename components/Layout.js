import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
import classes from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <main className={classes.main}>
        <section className={classes.side}>
          <div className={classes.sidetitle}>
            <h3>Do Docs</h3>
          </div>

          <div className={classes.routes}>
            <div className={classes.group}>
              <h3 className={classes.grouptitle}>Getting Started</h3>
              <ul className={classes.grouplist}>
                <li>
                  <Link href="/docs/jest">Inside Item0</Link>
                </li>
                <li>
                  <Link href="/docs/test">Inside Item1</Link>
                </li>
                <li>
                  <Link href="/docs/mest">Inside Item2</Link>
                </li>
                <li>
                  <Link href="/">Inside Item3</Link>
                </li>
                <li>
                  <Link href="/">Inside Item4</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Link href="/">First Project</Link>
          </div>
        </section>
        <section className={classes.content}>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
