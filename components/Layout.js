import React, { useState } from "react";
import Footer from "./Footer";
import Link from "next/link";
import classes from "./layout.module.css";

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleMenu2, setToggleMenu2] = useState(false);
  const [toggleMenu3, setToggleMenu3] = useState(false);

  const toggleHandler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };
  const toggleHandler2 = (e) => {
    e.preventDefault();
    setToggleMenu2(!toggleMenu2);
  };
  const toggleHandler3 = (e) => {
    e.preventDefault();
    setToggleMenu3(!toggleMenu3);
  };

  return (
    <div>
      <main className={classes.main}>
        <section className={classes.side}>
          <div className={classes.sidetitle}>
            <h3>Do Docs</h3>
          </div>

          <div className={classes.routes}>
            <div className={classes.group}>
              <h3 className={classes.grouptitle} onClick={toggleHandler}>
                Getting Started
              </h3>
              {toggleMenu && (
                <ul className={classes.grouplist}>
                  <li>
                    <Link href="/docs/getting-started">Inside Item0</Link>
                  </li>
                  <li>
                    <Link href="/docs/test">Inside Item1</Link>
                  </li>
                  <li>
                    <Link href="/docs/mest">Inside Item2</Link>
                  </li>
                  <li>
                    <Link href="/docs/python">Inside Item3</Link>
                  </li>
                  <li>
                    <Link href="/docs/test">Inside Item4</Link>
                  </li>
                </ul>
              )}
            </div>

            <div className={classes.group}>
              <h3 className={classes.grouptitle} onClick={toggleHandler2}>
                Getting Started
              </h3>
              {toggleMenu2 && (
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
                    <Link href="/docs/python">Inside Item3</Link>
                  </li>
                  <li>
                    <Link href="/docs/test">Inside Item4</Link>
                  </li>
                </ul>
              )}
            </div>

            <div className={classes.group}>
              <h3 className={classes.grouptitle} onClick={toggleHandler3}>
                Getting Started
              </h3>
              {toggleMenu3 && (
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
                    <Link href="/docs/python">Inside Item3</Link>
                  </li>
                  <li>
                    <Link href="/docs/test">Inside Item4</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </section>
        <section className={classes.content}>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
