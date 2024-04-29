import { AccountCircle } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';

export default function InputUser({onChange, error})
{
    const handleChange = (e) => 
    {
        const value = e.target.value
        onChange(value)
    }
    
    return (
        <div>
        <Box>
        <AccountCircle sx={{color:"grey", position:"relative", margin:"auto", right:"27px", top:"4px"}}/>
        <TextField 
            error={error}
            id="User"
            onChange={handleChange}
            variant="outlined" 
            label="Username" 
            required
            sx={{width:"271px"}}
            inputProps={{maxLength:16}}
            style={{position:"relative", right:"12px"}}
        >
        </TextField>
        </Box>
        </div>
    )
}