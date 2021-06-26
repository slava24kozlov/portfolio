import React from 'react';
import Portal from '@material-ui/core/Portal';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    alert: {
        marginTop: theme.spacing(1)
    },
    listInformation: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: "gray",
        opacity: 0.95
    }
}));

export default function DescriptionContentPortal() {
    const classes = useStyles();
    const [show, setShow] = React.useState(false);
    const container = React.useRef(null);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <div className={classes.alert}>
                <Typography variant='body1' color='inherit' paragraph>
                    Front-end developer
                    <div className={classes.alert} ref={container}/>
                </Typography>
                {show ? (
                    <Portal container={container.current}>
                        <Typography variant='h5' color='inherit' paragraph>
                            This is my portfolio web page.
                            I use technology React and Material-UI.
                            I hope that my page looks interesting to different users.
                        </Typography>

                        <List className={classes.listInformation}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CallIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText color='black' primary="Phone" secondary="+375(29)199-53-50"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <EmailIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Email" secondary="slava24kozlov@gmail.com"/>
                            </ListItem>
                        </List>
                    </Portal>
                ) : null}
            </div>

            <Button variant='contained' color='secondary' onClick={handleClick}>
                {show ? 'Roll up' : 'Learn more'}
            </Button>
        </div>
    );
}