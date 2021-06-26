import React from 'react';
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DescriptionContentPortal from "./DescriptionContentPortal";

const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: `rgba(0, 0, 0, .3)`

    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(4),
        marginTop: theme.spacing(6)
    }
}));

export default function MainContent() {
    const classes = useStyles();

    return (
        <Paper className={classes.mainFeaturesPost}
               style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
            <Container fixed>
                <div className={classes.overlay}/>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                            <Typography component='h1' variant='h3' color='inherit'>
                                Kozlov Vyacheslav
                            </Typography>
                            <DescriptionContentPortal/>
                            {/*<Typography variant='h5' color='inherit' paragraph>
                                This is my first web page. I use technology material-UI.
                                I hope my page look interesting to other people.
                            </Typography>
                            <Button variant='contained' color='secondary'>
                                Learn more
                            </Button>*/}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}