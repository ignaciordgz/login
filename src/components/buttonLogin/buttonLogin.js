import * as React from 'react';
import { ThemeProvider, Button, Typography } from "@mui/material";
import { createTheme } from '@mui/material';
import "./buttonLogin.css";


export default function ButtonLogin({onClick})
{
    return (
        <div>
            <Button variant = "outlined" id="login" size="medium" onClick={onClick}>
                    <Typography id="textLogin" variant="h6" sx={{fontFamily: "Poppins" }}>Log in</Typography>
            </Button>
        </div>
    )
}