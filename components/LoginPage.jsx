import React from 'react'
import styles from '../styles/LoginPage.module.scss'

import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { returnLogin, setLogin } from '../redux/loginSlice';


const LoginPage = () => {

    const router = useRouter()
    const [usernameError, setUsernameError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const login = useSelector(state => state.login)
    const dispatch = useDispatch()

    React.useEffect( () => {
        if ( localStorage.getItem('login') ) {
            dispatch( setLogin( JSON.parse(localStorage.getItem('login')) ) )
            dispatch( returnLogin() )
            router.push('/home')
        }
    }, [] )

    function handleSubmit(event) {
        event.preventDefault()
        const data = {
            username : event.target.elements[0].value,
            password : event.target.elements[1].value
        }
        if (data.username === '') { setUsernameError(true) }
        else if (data.password === '') { setPasswordError(true) }
        else {
            // console.log(data)
            dispatch( setLogin(data) )
            dispatch( returnLogin() )
            setUsernameError(false)
            setPasswordError(false)
            localStorage.setItem('login', JSON.stringify(data) )
            router.push('/home')
        }
    }

    return (
        <div className={styles.body}>
            <form className={styles.container} onSubmit={handleSubmit}>
                <h3>Login Form</h3>
                {
                    usernameError ? <TextField error label="Username" autoComplete="Off" variant="standard"/>
                    : <TextField defaultValue='' label="Username" autoComplete="Off" variant="standard"/>
                }
                {
                    passwordError ? <TextField error label="Password" type="password" variant="standard"/>
                    : <TextField defaultValue='' label="Password" type="password" variant="standard"/>
                }
                <button type='submit' style={{display: 'none'}}></button>
                {/* so that i can submit the form by pressing enter */}
            </form>
        </div>
    )
}

export default LoginPage
