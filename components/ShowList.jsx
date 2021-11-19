import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';


const ShowList = () => {
    return (
        <List >
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="shimmer."
                    secondary="I'll be in your neighborhood doing errands this…"
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="rio."
                    secondary="are u a nigger? please dont tell me ur a nigger for god's sake"
                />
            </ListItem>
        </List>
    )
}

export default ShowList
