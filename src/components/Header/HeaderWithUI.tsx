import React from "react";
import "./Header.css"
import {AppBar, Box, Button, IconButton, Typography, Toolbar} from "@mui/material";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export function HeaderWithUI () {
    return (
        <Box className="header"
             sx={{ flexGrow: 1 }}
        >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ConnectWithoutContactIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Social Network
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>




        // <header className="header">
        //     <img src="https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png" alt=" "/>
        // </header>
    )
}
