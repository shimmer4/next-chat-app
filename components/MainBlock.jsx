import React from 'react'
import styles from '../styles/MainBlock.module.scss'

import InputForm from './InputForm'
import ShowList from './ShowList'

const MainBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.input_form}>
                <InputForm />
            </div>
            <div className={styles.msg_list}>
                <ShowList />
            </div>
        </div>
    )
}

export default MainBlock