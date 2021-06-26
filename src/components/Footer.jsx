import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Typography} from "@material-ui/core";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WorkIcon from '@material-ui/icons/Work';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    bottomNavigationFooter: {
        marginTop: theme.spacing(2),
        width: 500
    }
}));

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState('linkedin');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div align='center'>
            <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNavigationFooter}>
                <BottomNavigationAction label="Linkedin" value="linkedin"
                                        icon={<LinkedInIcon onDoubleClick={() => window.open('https://www.linkedin.com/in/vyacheslav-kozlov-a71470131/', '_blank')}/>}/>
                <BottomNavigationAction label="Rabota.by" value="rabota"
                                        icon={<WorkIcon onDoubleClick={() => window.open('https://rabota.by/resume/cb7cb029ff054c0e910039ed1f683979444653', '_blank')}/>}/>
                <BottomNavigationAction label="GitHub" value="github"
                                        icon={<GitHubIcon onDoubleClick={() => window.open('https://github.com/slava24kozlov/vyacheslav-kozlov-react.git', '_blank')}/>}/>
            </BottomNavigation>
            <Typography color='textSecondary' component='p' variant='subtitle1'>
                Web Developer Blog React js Material UI site
            </Typography>
        </div>
    );
}