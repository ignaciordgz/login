import { AccountCircle } from "@mui/icons-material";
import { Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Box from '@mui/material/Box';


export default function InputUser({onChange})
{
    const handleChange = (e) => 
    {
        const value = e.target.value
        onChange(value)
    }

    return (
        <div>
        <Box>
        <AccountCircle sx={{color:"grey", position:"absolute", left:"80.5vh", margin:"14px"}}/>
        <TextField 
            id="User"
            onChange={handleChange}
            variant="outlined" 
            label="Username" 
            required
            sx={{width:"270.4px", right:"0.2px"}}
            inputProps={{maxLength:16}}
        >
        </TextField>
        </Box>
        </div>
    )
}