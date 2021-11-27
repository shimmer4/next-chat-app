import React from 'react'
import { TextField } from '@mui/material'
import socket from './socket'
import { useSelector } from 'react-redux';

function InputForm() {

    const login = useSelector(state => state.login)

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(event.target.elements[0].value)
        const data = {
            "name" : login.username,
            "message" : event.target.elements[0].value
        }
        socket.emit('message', data)
        event.target.elements[0].value = ''
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField label="Message" variant="standard" autoComplete="off" defaultValue="Hello World"/>
            </form>
        </div>
    )
}

export default InputForm
