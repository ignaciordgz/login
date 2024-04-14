import { AccountCircle } from "@mui/icons-material";
import { Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Box from '@mui/material/Box';


export default function InputUser()
{
    return (
        <div>
        <Box>
        <AccountCircle sx={{color:"grey", margin:"10px"}}/>
        <TextField 
            id="User"
            variant="outlined" 
            label="Username" 
            required
            inputProps={{maxLength:16}}
        >
        </TextField>
        </Box>
        </div>
    )
}