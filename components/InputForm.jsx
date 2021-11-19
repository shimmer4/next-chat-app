import React from 'react'
import { TextField } from '@mui/material'

function InputForm() {

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target.elements[0].value)
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