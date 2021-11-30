
import React from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import MainBlock from '../components/MainBlock'

export default function Home() {

  const router = useRouter()
  const login = useSelector(state => state.login)
  const socketConnected = useSelector(state => state.socket)

  return (
    <div className={styles.container}>
      {
        login ? ( 
            <>
              {/* <h1>welcome {login.username}</h1> */}
              {/* <h4>{login.password}</h4> */}
              {/* {
                socketConnected ? <h2>server online 🟢</h2>
                : <h2>connecting to server...</h2>
              } */}
              <MainBlock />
            </>
          ) 
        : <h2>please log in</h2>
      }
    </div>
  )
}


// export async function getServerSideProps(context) {
//   const req = context.req.headers
//   // const res = context.res
//   console.log(`user joined with IP : ${req.host}`) // to get IP of user
  
//   const res = await axios.get("https://jsonplaceholder.typicode.com/todos/")
//   const todos = res.data
//   return {
//     props: { todos }
//   }
// }