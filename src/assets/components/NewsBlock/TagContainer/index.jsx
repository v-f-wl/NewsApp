import React from 'react'
import styles from './TagContainer.module.scss'

const TagContainer = () => {
  return (
    <div className={styles.TagContainer}>
        <h3 className={styles.TagContainerTitle}>
            Popular Category
        </h3>
        <div className={styles.TagBody}>
            <span className={styles.TagBodyName}>knausgaard</span>
            <span className={styles.TagBodyName}>bespoke</span>
            <span className={styles.TagBodyName}>skateboard</span>
            <span className={styles.TagBodyName}>dreamcatcher</span>
            <span className={styles.TagBodyName}>bespoke</span>
            <span className={styles.TagBodyName}>skateboard</span>
            <span className={styles.TagBodyName}>dreamcatcher</span>
        </div>
    </div>
  )
}

export default TagContainer