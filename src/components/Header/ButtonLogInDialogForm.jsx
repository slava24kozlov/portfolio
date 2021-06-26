import React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";

export default function ButtonLogInDialogForm(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return(
        <Box mr={3}>
            <Button color='inherit' variant='outlined' onClick={handleClickOpen}>
                Log In
            </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
            <DialogContent>
                <DialogContentText>Enter your personal email and password</DialogContentText>
                <TextField autoFocus margin='dense' id='name' label='Email Address'
                           type='email' variant='filled' fullWidth/>
                <TextField autoFocus margin='dense' id='pass' label='Password'
                           type='password' variant='filled' fullWidth/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>Cancel</Button>
                <Button onClick={handleClose} color='primary'>Log in</Button>
            </DialogActions>
        </Dialog>
        </Box>
    )
}