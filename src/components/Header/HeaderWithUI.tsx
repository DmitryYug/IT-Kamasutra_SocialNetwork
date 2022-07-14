import React from "react";
import "./Header.css"
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import unknownUserPhoto
    from '../../assets/437-4374952_no-avatar-male-female.png'
import { NavLink } from "react-router-dom";
import { HeaderApiContainerPropsType } from "./HeaderApiContainer";


type HeaderPropsType = {
    isFetching: boolean
    userLogin: string | null
}

export const HeaderWithUI = (props: HeaderPropsType) => {
    return (
        <Box className="header"
             sx={{flexGrow: 1}}
        >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <img src={unknownUserPhoto}/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {props.userLogin}
                    </Typography>
                    <NavLink to={'/login'}>
                        <Button color="inherit">Login</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
