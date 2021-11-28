import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import socket from './socket'
import { useSelector, useDispatch } from 'react-redux';

import { setChat, returnChat } from '../redux/chatSlice'
import { setSocket } from '../redux/socketSlice'

const ShowList = () => {

    const chat = useSelector(state => state.chat)
    const socketConnected = useSelector(state => state.socket)
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
        <List >
            {
                chat.map( (msg, index) => {
                    return (
                        <ListItem key={index} alignItems="flex-start">
                            <ListItemText
                                primary={msg.name}
                                secondary={msg.message}
                            />
                        </ListItem>
                    )
                } )
            }
        </List>
    )
}

export default ShowList
