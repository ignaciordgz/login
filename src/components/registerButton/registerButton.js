import { Button, Typography } from "@mui/material"
import "./registerButton.css"


export default function RegisterButton({onClick})
{
    return (
        <div>
            <Button variant = "outlined" id="register" onClick={onClick} size="medium">
                <Typography id="textRegister" variant="h6" sx={{fontFamily: "Poppins" }}>Register</Typography>
            </Button>
        </div>
    )
}
