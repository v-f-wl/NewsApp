import React from 'react'
import Profile from '../../UI/_profile'
import Search from '../../UI/_search'
import NewsContaier from '../NewsContainer'
import TagContainer from '../TagContainer'
import styles from './MainContainer.module.scss'

const MainContainer = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.ContainerTop}>
            <Search/>
            <Profile/>
        </div>
        <div className={styles.ContainerBody}>
            <NewsContaier/>
            <TagContainer/>
        </div>
    </div>
  )
}

export default MainContainer