import React from 'react'
import styles from '../styles/MainBlock.module.scss'

import { io } from 'socket.io-client'

import InputForm from './InputForm'
import ShowList from './ShowList'

const MainBlock = () => {

    function handleClick() {
        console.log('clicked')
    }


    return (
        <div className={styles.container}>
            <div className={styles.input_form}>
                <InputForm />
                <button onClick={handleClick}>CLICK ME NIGGA</button>
            </div>
            <div className={styles.msg_list}>
                <ShowList />
            </div>
        </div>
    )
}

export default MainBlock