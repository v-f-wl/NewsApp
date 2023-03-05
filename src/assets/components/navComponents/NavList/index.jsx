import React from 'react'
import styles from './NavList.module.scss'


const NavList = () => {
  const activeLink = styles.NavListItem + ' ' + styles.NavListItemActive
  return (
    <ul className={styles.NavList}>
        <li><a href="#" className={activeLink}>
            <span className=""></span>DashBoard</a>
        </li>
        <li><a href="#" className={styles.NavListItem}>
            <span className=""></span>Favorite</a>
        </li>
        <li><a href="#" className={styles.NavListItem}>
            <span className=""></span>See Later</a>
        </li>
        <li><a href="#" className={styles.NavListItem}>
            <span className=""></span>Your News</a>
        </li>
    </ul>
  )
}

export default NavList