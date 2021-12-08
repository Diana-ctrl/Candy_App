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

export const VeganSweets = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image='https://img.povar.ru/main/12/d9/2c/fe/veganskie_konfeti_iz_suhofruktov-285409.jpg'
                        title='image title'
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            Vegan sweets
            </Typography>
                        <Typography >
                            Do you have a sweet tooth, but want to give up animal products? We've got your back!
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