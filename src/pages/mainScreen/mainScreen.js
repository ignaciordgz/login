import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import InputUser from '../../components/inputUser/inputUser'
import InputPassword from '../../components/inputPassword/inputPassword'
import "./mainScreen.css"
import ButtonLogin from '../../components/buttonLogin/buttonLogin'
import RegisterButton from '../../components/registerButton/registerButton'
import { axiosPostUser } from "../../service/UserService"


export default function MainScreen()
{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (value) => 
    {
        setUsername(value)
    }

    const handlePasswordChange = (value) => 
    {
        setPassword(value)
    }

    const handleSubmit = async() => 
    {
        await axiosPostUser(
            {
                username : username,
                password : password
            }
        )
    }

    return (
        <Container id="container">
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <InputUser onChange={handleUsernameChange}/>
            </Grid>

            <Grid item xs={12}>
                <InputPassword onChange={handlePasswordChange}/>
            </Grid>

            <Grid item xs={12}>
                <RegisterButton onClick={handleSubmit}/>
            </Grid>

            <Grid item xs={12}>
                <ButtonLogin/>
            </Grid>
            </Grid>

        </Container>
    )
}
