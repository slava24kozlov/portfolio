import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ButtonLogInDialogForm from "./ButtonLogInDialogForm";
import ButtonSingUpBackdrop from "./ButtonSingUpBackdrop";
import MenuAfterClick from "./MenuAfterClick"
import logo from '../../media/logo.svg';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(0.5)
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Cinzel'
    },
    logo: {
        position: 'absolute',
        marginTop: theme.spacing(0.5)
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position='fixed'>
            <img className={classes.logo} src={logo} alt='logo header' width='75px'/>
            <Container fixed>
                <Toolbar>
                    <MenuAfterClick menuButton={classes.menuButton}/>
                    {/*<IconButton className={classes.menuButton} edge='start' color='inherit' aria-label='menu'>
                        <MenuIcon/>
                    </IconButton>*/}
                    <Typography className={classes.title} variant='h6'>Web Developer Blog</Typography>
                    {/*Log In*/}
                    <ButtonLogInDialogForm/>
                    {/*Sing Up*/}
                    <ButtonSingUpBackdrop/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}