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

export const Croissants = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image='https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-articleLarge.jpg'
                        title='image title'
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            Croissants
            </Typography>
                        <Typography >
                            “The croissant began as the Austrian kipfel but became French the moment people began to make it with puffed pastry, which is a French innovation,” says Chevallier"
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