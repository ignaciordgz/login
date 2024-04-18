import { Container, Grid } from '@mui/material'
import React from 'react'
import InputUser from '../../components/inputUser/inputUser'
import InputPassword from '../../components/inputPassword/inputPassword'
import "./mainScreen.css"
import ButtonLogin from '../../components/buttonLogin/buttonLogin'
import RegisterButton from '../../components/registerButton/registerButton'


export default function MainScreen()
{

    return (
        <Container id="container">
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <InputUser/>
            </Grid>

            <Grid item xs={12}>
                <InputPassword/>
            </Grid>

            <Grid item xs={12}>
                <RegisterButton/>
            </Grid>

            <Grid item xs={12}>
                <ButtonLogin/>
            </Grid>
            </Grid>

        </Container>
    )
}
