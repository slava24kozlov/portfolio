import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import {Layers, PlayCircleFilled} from "@material-ui/icons";
import { styled } from '@material-ui/core/styles';
import imageContent from '../media/photo_2021-06-23_00-17-18.jpg';

const useStyles = makeStyles((theme) => ({
    mainContent: {
        fontFamily: 'Stint Ultra Condensed'
    },
    mainButtons: {},
    cardGrid: {
        marginTop: theme.spacing(4)
    },
    card: {},
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    }
}));

const MyTypography = styled(Typography)({
    fontFamily: 'Stint Ultra Condensed'
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Content() {
    const classes = useStyles();
    return (
        <main>
            <div className={classes.mainContent}>
                <Container maxWidth='md'>
                    <MyTypography variant='h3' align='center' color='textPrimary' gutterBottom>
                        Web developer blog
                    </MyTypography>
                    <MyTypography variant='h4' align='center' color='textSecondary' paragraph>
                        «Twenty years from now, you’ll be more disappointed by
                        the things that you didn’t do than by the ones you did do.»
                        <i> Mark Twain</i>
                    </MyTypography>
                    <div className={classes.mainButtons}>
                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    Start now
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Learn more
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                           image={imageContent}
                                           title='image title'/>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant='h5' color='textPrimary' gutterBottom>
                                        Blog post
                                    </Typography>
                                    <Typography variant='h6' color='textSecondary' paragraph>
                                        Description information in blog post
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        View
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Edit
                                    </Button>

                                    <Layers/>
                                    <PlayCircleFilled/>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}