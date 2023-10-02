import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';


const data = [
    {
        con: 'Single-line item-1'
    },
    {
        con: 'Single-line item-2'
    },
    {
        con: 'Single-line item-3'
    },
    {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    }, {
        con: 'Single-line item-3'
    },
];


const MasterData = () => {



    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));


    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);


    return (
        <div style={{ border: '1px solid grey',borderRadius:'10px', margin: '0 10px', padding: '10px', }}>
            <Grid container item spacing={3} xs={12}>

                <Grid item lg={6} md={12} sm={12} >
                    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                        <Grid item >
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                Master Data:-
                            </Typography>
                            <Demo style={{ maxHeight:'60vh', overflowY:'scroll', scrollBehavior:'smooth'}}>
                                {
                                    data.map((res) => (
                                        <List dense={dense} className='list-group'>
                                            <ListItem
                                                className='list-group-item'
                                                secondaryAction={
                                                    <Box>
                                                        <IconButton edge="end" aria-label="delete">
                                                            <EditIcon style={{ color: 'blue', marginRight: '10px' }} />
                                                        </IconButton>
                                                        <IconButton edge="end" aria-label="delete">
                                                            <DeleteIcon style={{ color: 'red' }} />
                                                        </IconButton>
                                                    </Box>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar style={{backgroundColor:'#2196F3'}}>
                                                        <FolderIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={res.con}
                                                    secondary={secondary ? 'Secondary text' : null}
                                                />
                                            </ListItem>
                                        </List>
                                    ))
                                }

                            </Demo>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item lg={6} md={12} sm={12}>
                    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                        <Grid item >
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                Master List Item:-
                            </Typography>
                            <Demo style={{ maxHeight:'60vh', overflowY:'scroll', scrollBehavior:'smooth'}}>
                                {
                                    data.map((res) => (
                                        <List dense={dense} className='list-group'>
                                            <ListItem
                                                className='list-group-item'
                                                secondaryAction={
                                                    <Box>
                                                        <IconButton edge="end" aria-label="delete">
                                                            <EditIcon style={{ color: 'blue', marginRight: '10px' }} />

                                                        </IconButton>
                                                        <IconButton edge="end" aria-label="delete">

                                                            <DeleteIcon style={{ color: 'red' }} />
                                                        </IconButton>
                                                    </Box>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar style={{backgroundColor:'#2196F3'}}>
                                                        <FolderIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={res.con}
                                                    secondary={secondary ? 'Secondary text' : null}
                                                />
                                            </ListItem>
                                        </List>
                                    ))
                                }

                            </Demo>
                        </Grid>
                    </Box>
                </Grid>

            </Grid>
        </div>
    )
}

export default MasterData;