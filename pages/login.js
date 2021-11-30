import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

import LoginPage from '../components/LoginPage'

export default function Home() {

  return (
    <div className={styles.container}>
      <LoginPage />
    </div>
  )
}