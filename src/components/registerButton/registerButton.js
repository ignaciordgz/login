import { Button, Typography } from "@mui/material"


export default function RegisterButton()
{
    return (
        <div>
            <Button variant = "outlined" id="register" href="registration" size="medium">
                <Typography id="textRegister" variant="h6" sx={{fontFamily: "Poppins" }}>Register</Typography>
            </Button>
        </div>
    )
}
