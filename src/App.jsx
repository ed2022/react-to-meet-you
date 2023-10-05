// Importing react 
import React from 'react'; 
import { Typography, AppBar, Button,  Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'; 
import { PhotoCamera } from '@mui/icons-material'; 

import useStyles from './styles';


const cards = [1,2,3,4,5,6,7,8,9];

const App = ()=>{
    const classes = useStyles(); 
    return (
        <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant='h6'> 
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container} backgroundColor='theme.palette.background.paper' padding ='theme.spacing(8, 0, 6)'>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, magnam iure perferendis sit dolore rem eos animi, sunt tempora tenetur vel, eum quidem velit amet! Expedita distinctio ratione aliquam qui.  
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outline' color='primary'>
                                        Don't see my photos
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGird} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card)=>{
                                return (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia className={classes.CardMedia} image='http://source.unsplash.com/random' title='Image Title' height='100%'/>
                                        <CardContent className={classes.CardContent}>
                                            <Typography gutterBottom variant='h5'>Heading</Typography>
                                            <Typography>This is a card. We will use this to descripe the pictures.</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <button size='small' color='primary'>View</button>
                                            <button size='small' color='primary'>Edit</button>
                                        </CardActions>
                                    </Card>
                            </Grid>);
                            })
                        }
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h5' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    Something here to give the footer a purpose! 
                </Typography>
            </footer>
        </>
    )
}; 

//Making it exportable 
export default App; 