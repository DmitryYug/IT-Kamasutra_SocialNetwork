import React, {MouseEventHandler, useState} from 'react'
import {RootsStateType} from "../../../redux/redux-store";
import {Avatar, Button, Card, CardHeader, Pagination, PaginationItem} from "@mui/material";
import classes from './Users.module.css'
import {v1} from "uuid";
import unknownUserPhoto
    from '../../../assets/437-4374952_no-avatar-male-female.png'
import {MySwitch} from '../../MyUiComponents/MySwitch/MySwitch';
import {NavLink} from 'react-router-dom';
import {UsersType} from '../../../redux/users-reducer';
import axios from 'axios';
import {followAPI, unFollowAPI} from '../../../api/api';

type UsersPropsType = {
    users: Array<UsersType>
    followToggle: (userId: string, isChecked: boolean) => void
}

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {props.users.map(u => {
                    const onFollow = (isChecked: boolean) => {
                        let userId = u.id
                        if (isChecked) {
                            followAPI(userId).then(data => {
                                if (data.resultCode === 0) {
                                    props.followToggle(u.id, true)
                                }
                            })
                        } else {
                            unFollowAPI(userId).then(data => {
                                if (data.resultCode === 0) {
                                    props.followToggle(u.id, false)
                                }
                            })
                        }
                    }
                    return (
                        <Card
                            key={v1()}
                            sx={{maxWidth: 450, margin: '10px 0 10px 10px'}}>
                            <CardHeader
                                className={classes.item}
                                avatar={
                                    <>
                                        <NavLink to={'/profile/' + u.id}>
                                            <Avatar>
                                                <img src={u.photos.small != null
                                                    ? u.photos.small
                                                    : unknownUserPhoto}/>
                                            </Avatar>
                                        </NavLink>
                                    </>
                                }
                                title={`${u.name} Im from u.location.country, u.location.city`}
                                subheader={`${u.status}`}
                            />
                            <MySwitch
                                checked={u.followed}
                                trueText='Unfollow'
                                falseText='Follow'
                                callback={onFollow}
                            />
                        </Card>
                    )
                }
            )}
            <Button
                // onClick={onClickSetUsers}
                sx={{margin: '10px 0 10px 10px'}}
                variant='contained'>
                Show More
            </Button>
        </div>
    )
}
