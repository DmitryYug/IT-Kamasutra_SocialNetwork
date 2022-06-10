import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';
import {Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';


export function NavbarWithUI () {
    return(
        <List className={classes.nav}>
            <ListItem className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </NavLink>
            </ListItem>
            <ListItem className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>
                    <ListItemButton>
                        <ListItemIcon>
                            <MessageIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Messages" />
                    </ListItemButton>
                </NavLink>
            </ListItem>
            <ListItem className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItemButton>
                </NavLink>
            </ListItem>
        </List>
    )
}