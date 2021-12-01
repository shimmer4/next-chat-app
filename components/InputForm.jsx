import React from 'react'
import { TextField } from '@mui/material'
import socket from './socket'
import { useSelector } from 'react-redux';
import styles from '../styles/InputForm.module.scss'

function InputForm() {

    const login = useSelector(state => state.login)

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(event.target.elements[0].value)
        const data = {
            "name" : login.username,
            "message" : event.target.elements[0].value
        }
        if ( data.message !== '' ) {
            socket.emit('message', data)
        }
        event.target.elements[0].value = ''
    }

    return (
        <form className={styles.message_form} onSubmit={handleSubmit}>
            {/* <TextField label="Message" variant="standard" autoComplete="off" defaultValue="Hello World"/> */}
            <input className={styles.input_form} type="text" autoComplete="off" placeHolder="message"></input>
            <button type="submit" className={styles.input_button}>SEND</button>
        </form>
    )
}

export default InputForm
