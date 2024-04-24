import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Visibility } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import "./inputPassword.css"
import { useState } from 'react';

export default function InputPassword()
{
    var [password, setPassword] = useState("text");

    var visibility = <Visibility/>

    return (
        <div>
        <Box>
        <TextField
            id="password"
            label="Password"
            required
            type={password}
            InputProps=
            {{
                endAdornment:(
                <IconButton onClick={() => setPassword((password === "text" ?  "password" : "text"))} id="view" size="large" variant="outlined">
                    {password === "text" ? visibility = <Visibility/> : visibility = <VisibilityOff/>}
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