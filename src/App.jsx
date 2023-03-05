import { useState } from 'react'
import styles from './App.module.scss'
import ModalNew from './assets/components/ModalNew'
import Nav from './assets/components/navComponents/Nav'
import MainContainer from './assets/components/NewsBlock/MainContainer'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className={styles.App}>
      <div className={styles.mainWrapper}>
        <Nav/>
        <MainContainer/>
      </div>
      <ModalNew/>
    </div>
  )
}

export default App
