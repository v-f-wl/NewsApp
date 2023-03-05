import React from 'react'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <form className={styles.SearchForm}>
      <button className={styles.SearchFormBtn}>
        <span className='icon-Vector'></span>
      </button>
      <input type="text" placeholder='Search...' className={styles.SearchFormInp} />
    </form>
  )
}

export default Search