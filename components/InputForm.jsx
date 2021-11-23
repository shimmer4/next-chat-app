import React from 'react'
import { TextField } from '@mui/material'
import socket from './socket'

function InputForm() {

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(event.target.elements[0].value)
        socket.emit('message', event.target.elements[0].value)
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
