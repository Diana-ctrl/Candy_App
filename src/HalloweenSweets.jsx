import './App.css';
import { Button, Typography, Grid, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';

import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
}))

export const HalloweenSweets = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image='https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2021/09/816d1c766eed0cc89ead9d12f4e6e7d6-2.jpg'
                        title='image title'
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            Halloween sweets
            </Typography>
                        <Typography >
                            We have a large range of Halloween sweets including classic Dracula teeth, jelly bones, fizzy spiders, chocolate pumpkins and many more!
            </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color='secondary'>
                            View
            </Button>
                        <Button size="small" color='secondary'>
                            Edit
            </Button>
                        <LayerIcon />
                        <PlayCircleFilledIcon>
                        </PlayCircleFilledIcon>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}