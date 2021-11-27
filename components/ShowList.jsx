import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import socket from './socket'
import { useSelector, useDispatch } from 'react-redux';

import { setChat, returnChat } from '../redux/chatSlice'

const ShowList = () => {

    const chat = useSelector(state => state.chat)
    const dispatch = useDispatch()

    React.useEffect( () => {

        socket.on('connect', socket => {
            console.log('connected')
        })

        socket.on('message', data => {
            // console.log('message recieved from server : ', data)
            dispatch( setChat(data) )
            dispatch( returnChat() )
        })

    }, [] )

    return (
        <List >
            {/* <ListItem alignItems="flex-start">
                <ListItemText
                    primary="shimmer."
                    secondary="I'll be in your neighborhood doing errands this week"
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="rio."
                    secondary="are u a nigger? please dont tell me ur a nigger for god's sake"
                />
            </ListItem> */}
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
