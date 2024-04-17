import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import "./inputPassword.css"
import { useState } from 'react';

export default function InputPassword()
{
    

    return (
        <div>
        <Box>
        <TextField
            label="Password"
            required
            type="password"
            InputProps=
            {{
                endAdornment:(
                <IconButton id="view" size="large" variant="outlined">
                    <VisibilityOff/>
                </IconButton>
                )
            }}
            inputProps={{maxLength:16, }}
        >
        </TextField>
        </Box>
        </div>
    )
}