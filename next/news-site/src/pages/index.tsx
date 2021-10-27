import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import MainLayout from 'layouts'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MainLayout>
        <div>
        </div>
      </MainLayout>
    </div>
  )
}

export default Home
