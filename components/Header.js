import React from 'react'
import Link from "next/link";
import classes from './layout.module.css';

const Header = () => {
  return (
    <header>
      <div className={classes.items}>
        <Link href="/">Home</Link>
      </div>
    </header>
  )
}

export default Header
