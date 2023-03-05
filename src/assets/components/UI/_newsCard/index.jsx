import React from 'react'
import styles from "./NewsCard.module.scss"


const NewsCard = () => {
  return (
    <div 
      className={styles.Card}>
        <img src="/src/assets/img/img.jpg" alt="#" className={styles.CardImg} />
        <div className={styles.CardWrapper}>
            <h3 className={styles.CardWrapperTitle}>
                Activated charcoal helvetica drinking 
            </h3>
            <p className={styles.CardWrapperTxt}>
                Sus wayfarers flexitarian direct trade bitters helvetica cold-pressed, tattooed occupy waistcoat authentic bushwick shaman. Try-hard prism intelligentsia...
            </p>
            <span className={styles.CardWrapperIcon + " " + styles.CardWrapperIconTop}>
              <span className='icon-time'></span>
            </span>
            <span className={styles.CardWrapperIcon}>
              <span className="icon-Vector-2"></span>
            </span> 
        </div>
    </div>
  )
}

export default NewsCard