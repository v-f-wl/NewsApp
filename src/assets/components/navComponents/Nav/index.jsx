import React from 'react'
import styles from "./Nav.module.scss"
import Logo from '../Logo'
import NavList from '../NavList'

const Nav = () => {
  return (
    <div className={styles.Nav}>
        <Logo/>
        <NavList/>
    </div>
  )
}

export default Nav