import { Dialog, Box, TextField } from "@mui/material"


const LoginDialog = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog open = {open} onClose = {handleClose}>
        <Box>
            <Box></Box>
            <Box>
                <TextField variant="standard"/>
            </Box>
        </Box>
        </Dialog>
    )
}

export default LoginDialog;