import React from 'react'
import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.Profile}>
      <div className={styles.ProfileContainer}>
        <img src='/src/assets/img/ava.jpg' className={styles.ProfilePhoto}/>
        <div className={styles.ProfileName}>
          Tristan Preston
        </div>
      </div>
      {/* кнопка для доп меню */}
      <div className='icon-Vector-3'></div>
    </div>
  )
}

export default Profile