import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';
import {Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';


export function NavbarWithUI () {
    return (
        <List className={classes.nav}>
            <ListItemButton className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>
                    <ListItem>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItem>
                </NavLink>
            </ListItemButton>
            <ListItemButton className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>
                    <ListItem >
                        <ListItemIcon>
                            <MessageIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Messages"/>
                    </ListItem>
                </NavLink>
            </ListItemButton>
            <ListItemButton className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>
                    <ListItem >
                        <ListItemIcon>
                            <GroupIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Users"/>
                    </ListItem>
                </NavLink>
            </ListItemButton>
        </List>
    )
}