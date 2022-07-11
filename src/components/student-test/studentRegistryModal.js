/* eslint-disable prettier/prettier */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default function StudentRegistryModal(props) {
    const { confirmHandler } = props;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const confirm = () => {
        confirmHandler();
        handleClose();
    };

    return (
        <div>
            <p />
            <Button onClick={handleOpen} variant='contained'>Register Student</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Box>
                        <Typography variant="h6" component="h3" align='left'>
                            Register Student
                        </Typography>
                    </Box>
                    <Box>
                        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                            <TextField 
                                label="First Name" 
                                variant="outlined" 
                                fullWidth 
                                required
                                />
                            <TextField 
                                label="Last Name" 
                                variant="outlined" 
                                fullWidth 
                                required
                                />
                        </Stack>
                    </Box>
                    <Box>
                        <TextField 
                        label="Email" 
                        variant="outlined" 
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                        />
                    </Box>
                    <Box>
                        <TextField 
                        label="Phone Number" 
                        variant="outlined" 
                        fullWidth
                        required
                        sx={{ mb: 2 }} 
                        />
                    </Box>
                    <TextField 
                    label="Date of Birth" 
                    variant="outlined" 
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }} 
                    sx={{ mb: 2 }} 
                    type="date"
                    />
                    <Button 
                    variant='contained' 
                    onClick={confirm} 
                    fullWidth
                    >
                        Register Student
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

StudentRegistryModal.propTypes = {
    confirmHandler: PropTypes.func.isRequired,
};