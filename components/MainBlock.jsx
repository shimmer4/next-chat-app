import React from 'react'
import styles from '../styles/MainBlock.module.scss'
import socket from './socket'


import InputForm from './InputForm'
import ShowList from './ShowList'

const MainBlock = () => {

    React.useEffect( () => {

        socket.on('connect', socket => {
            console.log('connected')
        })

        socket.on('message', data => {
            console.log('message recieved from server : ', data)
        })

    }, [] )


    function handleClick() {
        console.log('clicked')
        socket.emit('clicked')
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