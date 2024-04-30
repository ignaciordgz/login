import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import InputUser from '../components/inputUser/inputUser'
import InputPassword from '../components/inputPassword/inputPassword'
import ButtonLogin from '../components/buttonLogin/buttonLogin'
import RegisterButton from '../components/registerButton/registerButton'
import { axiosPostUser, axiosGetUsers } from "../service/UserService"


export default function MainScreen()
{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

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

    const handleSubmitLogin = async () =>
    {
        const users = (await axiosGetUsers()).data
        
        for (var user of users)
        {
            if (user.username === username && user.password === password)
            {
                console.log("Login Succeeded")
                setError(false)
            }
            else
            {
                console.error("Las credenciales no coinciden con ningun usuario registrado")
                setError(true)
                alert("Invalid credentials")
            }
        }
    }

    return (
        <Container id="container">
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <InputUser onChange={handleUsernameChange} error={error}/>
            </Grid>

            <Grid item xs={12}>
                <InputPassword onChange={handlePasswordChange} error={error}/>
            </Grid>

            <Grid item xs={12}>
                <RegisterButton onClick={handleSubmit}/>
            </Grid>

            <Grid item xs={12}>
                <ButtonLogin onClick={handleSubmitLogin}/>
            </Grid>
            </Grid>

        </Container>
    )
}
