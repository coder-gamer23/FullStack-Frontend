import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { Box, AppBar, Toolbar, Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import dubai from './education-quotes.jpg';
import '../App.css'

function BookComponent(props) {
    const [BookList, setBookList] = useState([]);
    useEffect(async () => {
        const token = localStorage.getItem('token');
        var decodedToken = jwt.decode(token);

        if (decodedToken.exp * 1000 <= Date.now()) {
            console.log("expired");
            props.history.push('/')
        } else {
            var response = await axios.get('https://book-backend-project.herokuapp.com/book/getbook',
                {
                    headers: {
                        'access-token': token
                    }
                })
            console.log(response.data)
            setBookList(response.data);
        }
    }, [])


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Book - Lists
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ padding: '30px' }}>
                <Grid container spacing={4}>
                    {BookList.map(row => (
                        <Grid item key={row._id}>
                            <Card sx={{ width: 250 }}>
                                <CardHeader
                                    title={row.bookname}
                                />
                                <CardContent>
                                    <img className='dubaipic' src={dubai} alt='buj kalifa' />
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                       Author: {row.authorname}
                                    </Typography>
                                    <Typography >
                                        Published: {row.published}
                                    </Typography> <br />
                                    <Button variant="text" href={`${row.link}`} target="_blank">
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}


export default BookComponent;

