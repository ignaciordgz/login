import * as React from 'react';
import { ThemeProvider, Button, Typography } from "@mui/material";
import { createTheme } from '@mui/material';
import "./buttonLogin.css";


export default function ButtonLogin()
{
    return (
        <div>
            <Button variant = "outlined" id="login" href="loginSucceeded" size="medium">
                    <Typography id="textLogin" variant="h6" sx={{fontFamily: "Poppins" }}>Login</Typography>
            </Button>
        </div>
    )
}