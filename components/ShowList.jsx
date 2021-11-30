import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import socket from './socket'
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/ShowList.module.scss'

import { setChat, returnChat } from '../redux/chatSlice'
import { setSocket } from '../redux/socketSlice'

const ShowList = () => {

    const chat = useSelector(state => state.chat)
    const socketConnected = useSelector(state => state.socket)
    const login = useSelector(state => state.login)
    const dispatch = useDispatch()

    React.useEffect( () => {
        socket.on('connect', () => {
            console.log('connected')
            dispatch( setSocket(socket.connected) )
        })

        socket.on('message', data => {
            // console.log('message recieved from server : ', data)
            dispatch( setChat(data) )
            dispatch( returnChat() )
        })

    }, [] )

    return (
        <List className="message_list">
            {
                chat.map( (msg, index) => {
                    return (
                        <div className={ msg.name===login.username ? (styles.msg_wrapper_self) : (styles.msg_wrapper_other) }>
                            <p className={styles.message}>
                                <span className={styles.username}>{msg.name}</span> : {msg.message}
                            </p>
                        </div>
                    )
                } )
            }
        </List>
    )
}

export default ShowList
