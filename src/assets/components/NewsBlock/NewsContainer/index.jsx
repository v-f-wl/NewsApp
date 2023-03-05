import React from 'react'
import NewsCard from '../../UI/_newsCard'
import styles from './NewsContainer.module.scss'

const NewsContaier = () => {
  return (
    <div className={styles.News}>
        <h2 className={styles.NewsTitle}>
            the latest news
        </h2>
        <div className={styles.NewsContainer}>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    </div>
  )
}

export default NewsContaier